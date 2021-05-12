'use strict';

function createUserCards(data) {
  data.map(function (link) {
    const img = document.createElement('img');
    img.src = link.profilePicture;

    return new Promise((res, rej) => {
      img.addEventListener('load', () => {
        document.body.append(img);
        res(img);
      });
      img.addEventListener('error', () => {
        rej(new Error('Image has not been delivered !'));
      });
    });
  });
}

fetch('./src/data.json')
  .then((data) => data.json())
  .then(createUserCards)
  .catch((error) => {
    console.log(error);
  });
