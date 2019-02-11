
function imageSuccess(response) {
    console.log(response.data.urls.regular);
    // select the body element
    // change its background to the image url
    $('body').css('background',`url(${response.data.urls.regular})`)
  }
  
  function imageFail(error) {
    console.log(error);
  }
  
  axios({
    method: "get",
    url: "https://api.unsplash.com/photos/random?client_id=3c34db833564a8dc1cdb1fb6592820c9b24d10871e200f5d442ca9f33bd22f4b",
  })
    .then(imageSuccess)
    .catch(imageFail);