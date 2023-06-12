// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

const cardList = document.querySelector('.gallery');
const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
  })
  .join('');

cardList.insertAdjacentHTML('afterbegin', galleryList);

let lightbox = new SimpleLightbox('.gallery a', {
  navText: ['<', '>'],
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
