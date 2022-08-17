// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// const SimpleLightbox = require('simplelightbox');

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

function getGalleryItemMarkup() {
  return galleryItems
    .map(image => {
      return `
      <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    `;
    })
    .join('');
}

gallery.innerHTML = getGalleryItemMarkup();

new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
  alertError: false,
});

console.log(galleryItems);
