import throttle from '../lib/throttle';

const SCROLL_DISTANCE = 150;

export default class PhotoList {
  constructor({onImageMount, numberOfPlaceholders}) {
    this._pages = null;
    this._perPage = null;
    this._currentPage = null;
    this._isLoading = false;
    this._getData = null;

    this._onImageMount = onImageMount;
    this._numberOfPlaceholders = numberOfPlaceholders;
    this._listItems = [];

    this._handleDocumentScroll = throttle(this._handleDocumentScroll, 500, this);

    this._setupElements();
  }

  _setupElements() {
    this._element = document.createElement('ul');
    this._element.classList.add('photo-list');
  }

  setPhotos(photoData) {
    this.reset();
    this._showLoadingPlaceholders();

    // This allows us to accept either a function which returns a Promise
    // or an instance of a Promise.
    this._getData = typeof photoData === 'function' ? photoData : () => photoData;
    this._currentPage = 1;
    this._isLoading = true;

    Promise.resolve(this._getData(this._currentPage)).then(({photos, pages, perPage}) => {
      this._isLoading = false;
      this._pages = pages;
      this._perPage = perPage;
      this._processNewPhotos(photos);
      this._setupScrollListener();
    }).catch((error) => {
      console.error('PhotoList.setPhotos: ', error);

      this.reset();
      this._showFetchError();
    });
  }

  reset() {
    this._destroyScrollListener();
    this._element.innerHTML = '';
    // We mutate `length` to trim the array because it's faster than .slice().
    this._listItems.length = 0;
  }

  _setupScrollListener() {
    document.addEventListener('scroll', this._handleDocumentScroll);
  }

  _destroyScrollListener() {
    document.removeEventListener('scroll', this._handleDocumentScroll);
  }

  _processNewPhotos(photos) {
    // We need to keep track of how many items are already listed because
    // we don't hold onto data from previous pages (photos.length will
    // only give us the length of the current page).
    const offset = ((this._currentPage - 1) * this._perPage);

    photos.forEach((photo, pageIndex) => {
      const index = pageIndex + offset;

      // If we ended up having more photos than the number of placeholder
      // items we created, we need to build more list items and
      // add them to the page.
      if (index >= this._listItems.length) {
        const listItem = this._createListItem();

        const removePlaceholderClass = () => {
          listItem.image.removeEventListener('load', removePlaceholderClass);
          listItem.wrapper.classList.remove('photo-list-placeholder');
        };

        listItem.image.addEventListener('load', removePlaceholderClass);
        this._onImageMount(listItem.image, photo);

        this._element.appendChild(listItem.wrapper);
        this._listItems.push(listItem);
      } else {
        const listItem = this._listItems[index];

        const removePlaceholderClass = () => {
          listItem.image.removeEventListener('load', removePlaceholderClass);
          listItem.wrapper.classList.remove('photo-list-placeholder');
        };

        listItem.image.addEventListener('load', removePlaceholderClass);

        this._onImageMount(listItem.image, photo);
      }
    });

    // If there were more placeholder items than we ended up needing,
    // remove the excess and delete the listItem objects.
    if ((photos.length + offset) < this._listItems.length) {
      let index = (photos.length + offset) - 1;

      while (++index < this._listItems.length) {
        const listItem = this._listItems[index];
        listItem.wrapper.remove();
      }

      // We mutate `length` to trim the array because it's faster than .slice().
      this._listItems.length = photos.length + offset;
    }
  }

  _showLoadingPlaceholders() {
    let index = -1;
    while (++index < this._numberOfPlaceholders) {
      const listItem = this._createListItem();

      listItem.wrapper.classList.add('photo-list-placeholder');
      this._element.appendChild(listItem.wrapper);
      this._listItems.push(listItem);
    }
  }

  _showFetchError() {
    this._element.innerHTML = `
      <h2 class='photo-list-load-error'>
        Uh-oh, it looks like something went wrong. Try searching again.
      </h2>
    `;
  }

  _createListItem() {
    const listItem = {
      wrapper: document.createElement('li'),
      image: document.createElement('img')
    };

    listItem.wrapper.classList.add('photo-list-item');
    listItem.image.classList.add('photo-list-image');

    listItem.wrapper.appendChild(listItem.image);

    return listItem;
  }

  _handleDocumentScroll(event) {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    const distanceFromEnd = Math.max(bodyHeight - (scrollPosition + windowSize), 0);

    if (
      distanceFromEnd < SCROLL_DISTANCE &&
      this._currentPage < this._pages &&
      !this._isLoading
    ) {
      this._isLoading = true;
      this._showLoadingPlaceholders();

      Promise.resolve(this._getData(this._currentPage + 1)).then(({photos, pages}) => {
        // In case the API returns a potentially-inaccurate total page estimate.
        this._isLoading = false;
        this._pages = pages;
        this._currentPage++;

        this._processNewPhotos(photos);
      }).catch((error) => {
        console.error('PhotoList.setPhotos: ', error);

        this.reset();
        this._showFetchError();
      });
    }
  }

  getElement() {
    return this._element;
  }

  destroy() {
    this.reset();
    this._element.remove();
    this._getData = null;
    this._onImageMount = null;
  }
}
