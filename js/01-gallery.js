import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryListRef: document.querySelector(".gallery"),
};

const galleryListMarkup = createGalleryListMarkup(galleryItems);
refs.galleryListRef.insertAdjacentHTML("beforeend", galleryListMarkup);

refs.galleryListRef.addEventListener("click", getUrlFromOriginPhoto);

function createGalleryListMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </li>`
    )
    .join("");
}

function getUrlFromOriginPhoto(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgUrl = event.target.dataset.source;
  openModalWindow(imgUrl);
}

function openModalWindow(imgUrl) {
  const instance = basicLightbox.create(
    `
    <img src="${imgUrl}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
