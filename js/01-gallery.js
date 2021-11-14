import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryRef = document.querySelector('.gallery');



const cartMarkup = createPictureCartMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cartMarkup);

galleryRef.addEventListener('click', onPictureClick);

function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
};

function onPictureClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    
    
}


galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
event.preventDefault()
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}"> width="800" height="600"
    `)
    instance.show()
}

