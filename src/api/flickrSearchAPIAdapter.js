export default (APIResponse) => {
  return {
    photos: APIResponse.photos.photo.map((photo) => ({
      title: photo.title,
      thumbnailURL: photo.url_n,
      fullURL: photo.url_c,
      thumbnailHeight: photo.height_n,
      thumbnailWidth: photo.width_n,
      fullHeight: photo.height_c,
      fullWidth: photo.width_c
    }))
  };
}
