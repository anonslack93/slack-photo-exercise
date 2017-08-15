import flickrAPI from '../api/flickrAPI';
import flickrSearchAPI from '../api/flickrSearchAPI';
import flickrSearchAPIAdapter from '../api/flickrSearchAPIAdapter';

import SearchForm from './SearchForm';
import PhotoList from './PhotoList';

const FLICKR_API_KEY = 'ed4a2d49acb1d0d7c73bb8aeacc3a82c';
const ITEMS_PER_PAGE = 30;

export default class App {
  constructor({container}) {
    this._subViews = [];

    this._setupAPIClients();
    this._setupSubViews(container);
  }

  _setupAPIClients() {
    const flickrAPIClient = flickrAPI(FLICKR_API_KEY);

    this._flickrSearchAPIClient = flickrSearchAPI(flickrAPIClient, {
      // Ask the API to return fully constructed URLs for a couple of different
      // image sizes. We could construct the URLs on the client, but pushing
      // this work to the server has no noticeable performance downside and
      // removes some complexity from the client code.
      extras: 'url_n,url_c',

      // For now, we're sorting by interestingness. We could expose sorting
      // in the UI and do this dynamically.
      sort: 'interestingness-desc',
      per_page: ITEMS_PER_PAGE
    });
  }

  _setupSubViews(container) {
    this._searchFormView = new SearchForm({
      placeholderText: 'Try: San Francisco, New York, London',
      submitText: 'Search',
      onSearch: this._handleSearch.bind(this)
    });

    container.appendChild(this._searchFormView.getElement());
    this._subViews.push(this._searchFormView);

    this._photoListView = new PhotoList({
      onImageMount: this._addLightboxAttributeToImage,
      numberOfPlaceholders: ITEMS_PER_PAGE
    });

    container.appendChild(this._photoListView.getElement());
    this._subViews.push(this._photoListView);
  }

  _handleSearch(text) {
    this._photoListView.setPhotos(
      this._flickrSearchAPIClient(text).then(flickrSearchAPIAdapter)
    );
  }

  _addLightboxAttributeToImage(imageElement, imageData) {
    imageElement.src = imageData.thumbnailURL;
    imageElement.setAttribute('data-lightbox', '');
    imageElement.setAttribute('data-lightbox-url', imageData.fullURL);
  }

  destroy() {
    this._subViews.forEach((subView) => subView.destroy());
    this._subViews = null;
    this._searchFormView = null;
    this._photoListView = null;
    this._flickrSearchAPIClient = null;
  }
}
