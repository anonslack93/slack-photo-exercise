export default class PhotoList {
  constructor({onImageMount, numberOfPlaceholders}) {
    this._onImageMount = onImageMount;
    this._numberOfPlaceholders = numberOfPlaceholders;
    this._listItems = [];

    this._setupElements();
  }

  _setupElements() {
    this._element = document.createElement('ul');
    this._element.classList.add('photo-list');
  }

  setPhotos(photoData) {
    this.reset();
    this._showLoadingPlaceholders();

    Promise.resolve(photoData).then(({photos}) => {
      photos.forEach((photo, index) => {
        // If we ended up having more photos than the number of placeholder
        // items we created, we need to build more list items and
        // add them to the page.
        if (index >= this._listItems.length) {
          const listItem = this._createListItem();
          this._onImageMount(listItem.image, photo);

          this._element.appendChild(listItem.wrapper);
          this._listItems.push(listItem);
        } else {
          const listItem = this._listItems[index];
          this._onImageMount(listItem.image, photo);
        }
      });

      // If there were more placeholder items than we ended up needing,
      // remove the excess and delete the listItem objects.
      if (photos.length < this._listItems.length) {
        let index = photos.length - 1;

        while (++index < this._listItems.length) {
          const listItem = this._listItems[index];
          listItem.wrapper.remove();
        }

        // We mutate `length` to trim the array because it's faster than .slice().
        this._listItems.length = photos.length;
      }
    });
  }

  reset() {
    this._element.innerHTML = '';
    // We mutate `length` to trim the array because it's faster than .slice().
    this._listItems.length = 0;
  }

  _showLoadingPlaceholders() {
    let index = -1;
    while (++index < this._numberOfPlaceholders) {
      const listItem = this._createListItem();

      this._element.appendChild(listItem.wrapper);
      this._listItems.push(listItem);
    }
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

  getElement() {
    return this._element;
  }

  destroy() {
    this._element.remove();
    this._listItems.length = 0;
  }
}
