export default (flickrAPIClient, options) => {
  return (text, perRequestOptions) => {
    return flickrAPIClient('flickr.photos.search', {
      text,
      ...options,
      ...perRequestOptions
    });
  };
}
