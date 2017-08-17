import objectFitPolyfill from '../lib/objectFitPolyfill';

export default class Lightbox {
  constructor({enableAttribute, urlAttribute}) {
    this._isVisible = false;
    this._currentIndex = null;
    this._photos = [];

    this._enableAttribute = enableAttribute;
    this._urlAttribute = urlAttribute;

    this._handleDocumentClick = this._handleDocumentClick.bind(this);
    this._handleDocumentKeydown = this._handleDocumentKeydown.bind(this);
    this.hide = this.hide.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);

    this._setupElements();
    this._setupListeners(enableAttribute, urlAttribute);
  }

  _setupElements() {
    const wrapper = document.createElement('div');
    this._elements = {wrapper};

    wrapper.classList.add('lightbox-wrapper');
    wrapper.innerHTML = `
      <div class='lightbox-modal'>
        <div class='lightbox-title-bar'>
          <h2 class='lightbox-title'></h2>
          <button class='lightbox-close-button'>Close</button>
        </div>
        <img class='lightbox-image'>
        <div class='lightbox-button-bar'>
          <button class='lightbox-previous-button'>Previous</button>
          <button class='lightbox-next-button'>Next</button>
        </div>
      </div>
    `;

    this._elements.modal = wrapper.querySelector('.lightbox-modal');
    this._elements.title = wrapper.querySelector('.lightbox-title');
    this._elements.closeButton = wrapper.querySelector('.lightbox-close-button');
    this._elements.previousButton = wrapper.querySelector('.lightbox-previous-button');
    this._elements.nextButton = wrapper.querySelector('.lightbox-next-button');
    this._elements.image = wrapper.querySelector('.lightbox-image');
  }

  _setupListeners() {
    const {closeButton, previousButton, nextButton} = this._elements;

    document.addEventListener('click', this._handleDocumentClick, true);
    document.addEventListener('keydown', this._handleDocumentKeydown, true);

    closeButton.addEventListener('click', this.hide);
    previousButton.addEventListener('click', this.previous);
    nextButton.addEventListener('click', this.next);
  }

  _destroyListeners() {
    const {closeButton, previousButton, nextButton} = this._elements;

    document.removeEventListener('click', this._handleDocumentClick, true);
    document.removeEventListener('keydown', this._handleDocumentKeydown, true);

    closeButton.removeEventListener('click', this.hide);
    previousButton.removeEventListener('click', this.previous);
    nextButton.removeEventListener('click', this.next);
  }

  _handleDocumentClick({target}) {
    if (this._isVisible && !this._elements.modal.contains(target)) {
      this.hide();
    }

    if (!target.hasAttribute(this._enableAttribute)) return;

    const url = target.getAttribute(this._urlAttribute);
    if (!url) return;

    this.show(url);
  }

  _handleDocumentKeydown(event) {
    if (!this._isVisible) return;

    const cancel = () => {
      event.preventDefault();
      event.stopPropagation();
    };

    if (event.key === 'Escape' || event.key === 'Esc') {
      cancel();
      this.hide();
    } else if (event.key === 'ArrowLeft' || event.key === 'Left') {
      cancel();
      this.previous();
    } else if (event.key === 'ArrowRight' || event.key === 'Right') {
      cancel();
      this.next();
    }
  }

  previous() {
    if (this._currentIndex === 0) return;

    const previousIndex = this._currentIndex - 1;
    const {url} = this._photos[previousIndex];

    this.show(url);
  }

  next() {
    if (this._currentIndex === (this._photos.length - 1)) return;

    const nextIndex = this._currentIndex + 1;
    const {url} = this._photos[nextIndex];

    this.show(url);
  }

  setPhotos(photoData) {
    this.reset();
    Promise.resolve(photoData).then((photos) => {
      this._photos = photos;
    });
  }

  show(url) {
    const {wrapper, image, title, previousButton, nextButton} = this._elements;
    const index = this._photos.findIndex((photo) => photo.url === url);

    image.src = url;
    objectFitPolyfill(image, 'contain');
    title.textContent = this._photos[index].title;
    wrapper.classList.add('lightbox-visible');

    previousButton.disabled = index === 0;
    nextButton.disabled = index === (this._photos.length - 1);

    this._currentUrl = url;
    this._currentIndex = index;
    this._isVisible = true;
  }

  hide() {
    const {wrapper, image, title} = this._elements;
    image.src = '';
    title.textContent = '';
    wrapper.classList.remove('lightbox-visible');

    this._currentUrl = null;
    this._currentIndex = null;
    this._isVisible = false;
  }

  reset() {
    this._photos.length = 0;
  }

  getElement() {
    return this._elements.wrapper;
  }

  destroy() {
    this._elements.wrapper.remove();
    this._destroyListeners();
    this._elements = null;
    this._photos = null;
  }
}
