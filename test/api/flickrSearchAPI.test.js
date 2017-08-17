import flickrSearchAPI from '../../src/api/flickrSearchAPI';

const FLICKR_SEARCH_METHOD = 'flickr.photos.search';

describe('flickrSearchAPI', () => {
  it('Should pass search-specific options to a flickrAPIClient', () => {
    const flickrAPIClient = sinon.stub().returns(Promise.resolve({}));
    const flickrSearchAPIClient = flickrSearchAPI(flickrAPIClient);

    expect(flickrSearchAPIClient('test search text')).to.be.an.instanceOf(Promise);

    expect(flickrAPIClient).to.have.been.calledOnce;
    expect(flickrAPIClient).to.have.been.calledWith(
      FLICKR_SEARCH_METHOD,
      sinon.match({text: 'test search text'})
    );
  });

  it('Should pass extra per-client options to a flickrAPIClient', () => {
    const perClientOpts = {per_client_option: 'per_client_value'};
    const flickrAPIClient = sinon.stub().returns(Promise.resolve({}));
    const flickrSearchAPIClient = flickrSearchAPI(flickrAPIClient, perClientOpts);

    expect(flickrSearchAPIClient('test search text')).to.be.an.instanceOf(Promise);

    // Call a second time to compare per-client options between calls.
    flickrSearchAPIClient('test search text');

    expect(flickrAPIClient).to.have.been.calledTwice;
    expect(flickrAPIClient).to.have.always.been.calledWith(
      FLICKR_SEARCH_METHOD,
      sinon.match({text: 'test search text', ...perClientOpts})
    );
  });

  it('Should pass extra per-request options to a flickrAPIClient', () => {
    const perClientOpts = {per_client_option: 'per_client_value'};
    const perRequestOpts = {per_request_option: 'per_request_value'};
    const flickrAPIClient = sinon.stub().returns(Promise.resolve({}));
    const flickrSearchAPIClient = flickrSearchAPI(flickrAPIClient, perClientOpts);

    expect(flickrSearchAPIClient('test search text')).to.be.an.instanceOf(Promise);

    expect(flickrAPIClient).to.have.been.calledOnce;
    expect(flickrAPIClient).to.have.been.calledWith(
      FLICKR_SEARCH_METHOD,
      sinon.match({text: 'test search text', ...perClientOpts})
    );

    // Call a second time to compare per-request options between calls.
    flickrSearchAPIClient('test search text', perRequestOpts);

    expect(flickrAPIClient).to.have.been.calledTwice;
    expect(flickrAPIClient).to.have.been.calledWith(
      FLICKR_SEARCH_METHOD,
      sinon.match({text: 'test search text', ...perClientOpts, ...perClientOpts})
    );
  });
});
