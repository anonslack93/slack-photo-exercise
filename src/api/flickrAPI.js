import getURLWithParameters from '../lib/getURLWithParameters';

const FLICKR_REST_URL = 'https://api.flickr.com/services/rest';

export default (APIKey) => {
  return (method, options) => {
    const requestParams = {
      api_key: APIKey,
      format: 'json',
      nojsoncallback: '1',
      method,
      ...options
    };

    const requestURL = getURLWithParameters(FLICKR_REST_URL, requestParams);

    return fetch(requestURL)
      .then((response) => {
        // Trigger rejection on HTTP failure codes, since fetch() will always
        // resolve except in cases of network failure.
        if (!response.ok) {
          throw new Error(`API request failed with code ${response.status}`);
        }
        return response.json();
      }).then((responseJSON) => {
        // Flickr's API has its own way of representing errors rather than
        // using HTTP status codes.
        if (responseJSON.stat !== 'ok') {
          throw new Error(`API request failed: ${responseJSON.message}`);
        }
        return responseJSON;
      });
  };
}
