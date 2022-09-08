// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector(".gallery");
console.log(gallery);
const galleryList = (acc, { preview, original, description }) => {
  return (acc +
    `<div class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
  <img class = "gallery__image"
  src = "${preview}"
  data-source = "${original}"
  alt = "${description}" />
  </a>
  </div>`);
};

const galleryCards = galleryItems.reduce(galleryList, "");
const items = document.querySelector(".gallery");
items.insertAdjacentHTML("afterbegin", galleryCards);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

// Change code below this line

console.log(galleryItems);
