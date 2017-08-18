export default (APIResponse) => {
  return {
    page: APIResponse.photos.page,
    pages: APIResponse.photos.pages,
    perPage: APIResponse.photos.perpage,
    photos: APIResponse.photos.photo.map((photo) => ({
      title: photo.title,
      thumbnailURL: photo.url_n,
      fullURL: (photo.url_b || photo.url_c || photo.url_z),
      thumbnailHeight: photo.height_n,
      thumbnailWidth: photo.width_n,
      fullHeight: (photo.height_b || photo.height_c || photo.height_z),
      fullWidth: (photo.width_b || photo.width_c || photo.width_z)
    }))
  };
}
