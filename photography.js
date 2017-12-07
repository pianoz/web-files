window.addEventListener('load', () => {
  var photoNumber = 0;
  var photoData = [
    {
      title: 'Flatirons in the Snow',
      description: 'to come later',
      url: 'photos/FlatironSnow.jpg'
    },
    {
      title: 'Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/BotanicalGdnFlower.jpg'
    },
    {
      title: 'JILA tower',
      description: 'not here yet',
      url: 'photos/JilaTower.jpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/3rdFlatiron.jpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/HaleInSnow.jpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/Eclipse.jpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/LongsSunrisejpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/BlueLake.jpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photosBoulderSunset.jpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/ChasmLake.jpg'
    },
    {
      title: 'Flower at the Denver Botanical Gardens',
      description: 'not here yet',
      url: 'photos/ChataquaSnow1.jpg'
    },
  ];
  function changePhotoNumberBy(diff) {
    photoNumber += diff;
    if(photoNumber == -1) photoNumber = photoData.length - 1;
    if(photoNumber == photoData.length) photoNumber = 0;
    var photo = photoData[photoNumber];

    document.querySelector('#phototitle').textContent = photo.title;
    document.querySelector('#photoenv').src = photo.url;
  }
  document.querySelector('#back').addEventListener('click', e => {
    e.preventDefault();

    changePhotoNumberBy(-1);

    return false;
  });
  document.querySelector('#next').addEventListener('click', e => {
    e.preventDefault();

    changePhotoNumberBy(1);

    return false;
  });
  changePhotoNumberBy(0);
});
