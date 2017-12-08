window.addEventListener('load', () => {
  var photoNumber = 0;
  var photoData = [
    {
      title: 'Flatirons in the Snow',
      description: 'date, 12/3/2 \n F-stop 1.8. \n 50 mm \n film type \n some words no more than a sentance. ',
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
      title: '3rd Flatiron in a Snowstorm',
      description: 'not here yet',
      url: 'photos/3rdFlatiron.jpg'
    },
    {
      title: 'Hale Science',
      description: 'not here yet',
      url: 'photos/HaleInSnow.jpg'
    },
    {
      title: '2017 Eclipse, Wyoming',
      description: 'not here yet',
      url: 'photos/Eclipse.jpg'
    },
    {
      title: 'Longs Diamond at Sunrise',
      description: 'not here yet',
      url: 'photos/LongsSunrise.jpg'
    },
    {
      title: 'Blue Lake, Uncomphagre Wilderness',
      description: 'not here yet',
      url: 'photos/BlueLake.jpg'
    },
    {
      title: 'Firey Boulder Sunset',
      description: 'not here yet',
      url: 'photos/BoulderSunset.jpg'
    },
    {
      title: 'Chasm Lake Storm',
      description: 'not here yet',
      url: 'photos/ChasmLake.jpg'
    },
    {
      title: 'Chataqua in Snow',
      description: 'not here yet',
      url: 'photos/ChataquaSnow1.jpg'
    },
    {
      title: 'Colmbines on Mt. Lincoln',
      description: 'not here yet',
      url: 'photos/ColumbinesLincoln.jpg'
    },
    {
      title: 'The View',
      description: 'not here yet',
      url: 'photos/CrestoneAscent.jpg'
    },
    {
      title: 'Crestone Campfire',
      description: 'not here yet',
      url: 'photos/CrestoneCampfire.jpg'
    },
    {
      title: '-Summit, -Keyhole',
      description: 'not here yet',
      url: 'photos/LongsRoute.jpg'
    },
    {
      title: 'Mt. Cameron Early Morning',
      description: 'not here yet',
      url: 'photos/MtCameron.jpg'
    },
    {
      title: 'On Belay',
      description: 'not here yet',
      url: 'photos/NickBelay.jpg'
    },
    {
      title: 'Too Cold for Some',
      description: 'not here yet',
      url: 'photos/QuandarySummit.jpg'
    },
    {
      title: 'Red Rocks',
      description: 'not here yet',
      url: 'photos/RedRocks.jpg'
    },
    {
      title: 'Flatirons Through the Royal Arch',
      description: 'not here yet',
      url: 'photos/RoyalArch.jpg'
    },
    {
      title: 'On Rappel',
      description: 'not here yet',
      url: 'photos/SamRappel.jpg'
    },
    {
      title: 'Green Ridge',
      description: 'not here yet',
      url: 'photos/SneffelsAscent.jpg'
    },
    {
      title: 'Lake Ridge',
      description: 'not here yet',
      url: 'photos/SneffelsRidge.jpg'
    },
    {
      title: 'Wild Home',
      description: 'not here yet',
      url: 'photos/SneffelsTent.jpg'
    },
    {
      title: 'The Jam',
      description: 'not here yet',
      url: 'photos/TheJam.jpg'
    },
  ];
  function changePhotoNumberBy(diff) {
    photoNumber += diff;
    if(photoNumber == -1) photoNumber = photoData.length - 1;
    if(photoNumber == photoData.length) photoNumber = 0;
    var photo = photoData[photoNumber];

    document.querySelector('#phototitle').textContent = photo.title;
    var formattedDescription = photo.description.replace(/\s*\n\s*/g, '<br/>');
    document.querySelector('#photodescrip').innerHTML = formattedDescription;
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
