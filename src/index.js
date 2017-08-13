import flickrAPI from './api/flickrAPI';
import flickrSearchAPI from './api/flickrSearchAPI';

const flickrAPIClient = flickrAPI('ed4a2d49acb1d0d7c73bb8aeacc3a82c');
const flickrSearchAPIClient = flickrSearchAPI(flickrAPIClient, {
  extras: 'url_n,url_c'
});

flickrSearchAPIClient('San Francisco').then((response) => {
  console.log(response);
});
