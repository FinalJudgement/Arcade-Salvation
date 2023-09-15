function saveImgFromURL(urlStr) {
  fetch(urlStr)
    .then((response) => response.blob)
    .then((blob) => {});
}
