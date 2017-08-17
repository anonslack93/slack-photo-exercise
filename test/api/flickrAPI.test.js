import fetchMock from 'fetch-mock';
import flickrAPI from '../../src/api/flickrAPI';

const FLICKR_BASE = 'https://api.flickr.com/services/rest';

describe('flickrAPI', () => {
  afterEach(fetchMock.restore);

  it('Should make calls to the Flickr rest API with some default params', () => {
    const flickrAPIClient = flickrAPI('TEST_API_KEY');
    const response = {
      stat: 'ok',
      data: {test_data_prop: 'test_value'}
    };
    const params = [
      '?api_key=TEST_API_KEY',
      '&format=json',
      '&method=test.api.method',
      '&nojsoncallback=1'
    ].join('');

    fetchMock.get(`${FLICKR_BASE}${params}`, response);

    return flickrAPIClient('test.api.method').then((data) => {
      expect(data).to.deep.equal(response);
    });
  });

  it('Should accept custom params', () => {
    const flickrAPIClient = flickrAPI('TEST_API_KEY');
    const customParams = {test_custom_param: 'test_param_value'};
    const response = {
      stat: 'ok',
      data: {test_data_prop: 'test_value'}
    };
    const params = [
      '?api_key=TEST_API_KEY',
      '&format=json',
      '&method=test.api.method',
      '&nojsoncallback=1',
      '&test_custom_param=test_param_value'
    ].join('');

    fetchMock.get(`${FLICKR_BASE}${params}`, response);

    return flickrAPIClient('test.api.method', customParams).then((data) => {
      expect(data).to.deep.equal(response);
    });
  });

  it('Should reject if the Flickr-specific status field is a failure state', () => {
    const flickrAPIClient = flickrAPI('TEST_API_KEY');
    const response = {
      stat: 'fail',
      message: 'Test API error message'
    };
    const params = [
      '?api_key=TEST_API_KEY',
      '&format=json',
      '&method=test.api.method',
      '&nojsoncallback=1'
    ].join('');

    fetchMock.get(`${FLICKR_BASE}${params}`, response);

    return flickrAPIClient('test.api.method')
      .then(() => { throw new Error('Should not resolve') })
      .catch((error) => {
        expect(error).to.be.an.instanceOf(Error);
        expect(error.message).to.equal('API request failed: Test API error message');
      });
  });

  it('Should reject if the request returns an unsuccessful HTTP code', () => {
    const flickrAPIClient = flickrAPI('TEST_API_KEY');
    const params = [
      '?api_key=TEST_API_KEY',
      '&format=json',
      '&method=test.api.method',
      '&nojsoncallback=1'
    ].join('');

    fetchMock.get(`${FLICKR_BASE}${params}`, 500);

    return flickrAPIClient('test.api.method')
      .then(() => { throw new Error('Should not resolve') })
      .catch((error) => {
        expect(error).to.be.an.instanceOf(Error);
        expect(error.message).to.equal('API request failed with code 500');
      });
  });
});
