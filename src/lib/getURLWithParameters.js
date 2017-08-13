export default (baseURL, params = {}) => {
  const keys = Object.keys(params);

  if (keys.length === 0) return baseURL;

  const queryString = keys.map((key) => {
    const value = params[key];

    if (value === undefined || value === null) return null;

    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }).filter(Boolean).join('&');

  return `${baseURL}?${queryString}`;
}
