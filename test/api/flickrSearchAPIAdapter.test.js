import flickrAPISearchResponse from './flickrAPISearchResponse';
import flickrAPISearchAdapterResult from './flickrAPISearchAdapterResult';
import flickrSearchAPIAdapter from '../../src/api/flickrSearchAPIAdapter';

describe('flickrSearchAPIAdapter', () => {
  it('Should map Flickr search results to an application-specific shape', () => {
    // The test data contains three photo objects, each of which has a different
    // maximum photo size. We expect that the adapter will choose the largest
    // available size for the `fullURL`, `fullHeight`, and `fullWidth` properties
    // for each object, and can verify that via data comparison rather than
    // multiple test cases.
    const adaptedData = flickrSearchAPIAdapter(flickrAPISearchResponse);
    expect(adaptedData).to.deep.equal(flickrAPISearchAdapterResult);
  });
});
