window.addEventListener('load', () => {
  var photoNumber = 0;
  var photoData = [
    {
      title: 'Flatirons in the Snow',
      description: '12/26/2015 \n Taken on an early morning hike up Chataqua after a storm. \n (iPhone)',
      url: 'photos/FlatironSnow.jpg'
    },
    {
      title: 'Denver Botanical Gardens',
      description: '8/25/2017 \n f/16 \n 50mm Zuiko \n 1/500s \n Portra 800',
      url: 'photos/BotanicalGdnFlower.jpg'
    },
    {
      title: 'JILA tower',
      description: '10/2/2017 \n f/16 \n 50mm Zuiko \n 1/250s \n Ilford 400',
      url: 'photos/JilaTower.jpg'
    },
    {
      title: '3rd Flatiron in a Snowstorm',
      description: '12/26/2015 \n (LG-G3)',
      url: 'photos/3rdFlatiron.jpg'
    },
    {
      title: 'Hale Science',
      description: '10/9/2017 \n f/16 \n 50mm Zuiko \n 1/250s \n Ilford 400',
      url: 'photos/HaleInSnow.jpg'
    },
    {
      title: '2017 Eclipse, Wyoming',
      description: '8/21/2017 \n f/5.6 \n 50mm Zuiko \n 1/500s \n Fujicolor 400',
      url: 'photos/Eclipse.jpg'
    },
    {
      title: 'Longs Diamond at Sunrise',
      description: '7/31/2015 \n (iPhone)',
      url: 'photos/LongsSunrise.jpg'
    },
    {
      title: 'Blue Lake, Uncomphagre Wilderness',
      description: '9/6/2015 \n Taken on the way up Sneffels (LG-G3)',
      url: 'photos/BlueLake.jpg'
    },
    {
      title: 'Fiery Boulder Sunset',
      description: '6/13/2015 \n (iPhone)',
      url: 'photos/BoulderSunset.jpg'
    },
    {
      title: 'Colmbines on Mt. Lincoln',
      description: '8/12/2014 \n (LG G-3)',
      url: 'photos/ColumbinesLincoln.jpg'
    },
    {
      title: 'The View',
      description: '8/2017 \n f/16 \n 300mm Zuiko \n 1/250s \n Portra 400',
      url: 'photos/CrestoneAscent.jpg'
    },
    {
      title: 'Crestone Campfire',
      description: '8/2017 \n f/1.8 \n 50mm Zuiko \n 1/4s \n Portra 800',
      url: 'photos/CrestoneCampfire.jpg'
    },
    {
      title: 'On Belay',
      description: '10/2017 \n f/16 \n 50mm Zuiko \n 1/100s \n Ektar 100',
      url: 'photos/NickBelay.jpg'
    },
    {
      title: 'Flatirons Through the Royal Arch',
      description: '1/8/2016 \n (LG-G3)',
      url: 'photos/RoyalArch.jpg'
    },
    {
      title: 'On Rappel',
      description: '10/2017 \n f/16 \n 50mm Zuiko \n 1/100s \n Ektar 100',
      url: 'photos/SamRappel.jpg'
    },
    {
      title: 'Green Ridge',
      description: '9/6/2015 \n (LG-G3)',
      url: 'photos/SneffelsAscent.jpg'
    },
    {
      title: 'Lake Ridge',
      description: '9/6/2015 \n (LG-G3)',
      url: 'photos/SneffelsRidge.jpg'
    },
    {
      title: 'The Jam',
      description: '8/24/2017 \n f/5.6 \n 50mm Zuiko \n 1/250s \n Portra 400',
      url: 'photos/TheJam.jpg'
    },
    {
      title: 'Quiet Chairlifts',
      description: '7/2017 \n f/16 \n 300mm Zuiko \n 1/500s \n Fuji 400.',
      url: 'photos/ABasin.jpg'
    },
    {
      title: 'Loveland Pass',
      description: '7/2017 \n f/16 \n 300mm Zuiko \n 1/500s \n Fuji 400.',
      url: 'photos/LovelandPass.jpg'
    },
    {
      title: 'Ranunculus Adoneus',
      description: '7/2017 \n f/16 \n 50mm Zuiko \n 1/500s \n Fuji 400.',
      url: 'photos/Buttercups.jpg'
    },
    {
      title: 'Almost There',
      description: '7/2017 \n f/16 \n 300mm Zuiko \n 1/500s \n Fuji 400.',
      url: 'photos/AlmostThere.jpg'
    },
    {
      title: 'Early Summit',
      description: '7/2017 \n f/16 \n 300mm Zuiko \n 1/500s \n Fuji 400.',
      url: 'photos/Quandary.jpg'
    },
    {
      title: 'Road Trip!',
      description: '10/2017 \n f/2.8 \n 50mm Zuiko \n 1/100s \n Ektar 100',
      url: 'photos/RoadTrip.jpg'
    },
    {
      title: 'Bonsai',
      description: '8/25/2017 \n f/16 \n 50mm Zuiko \n 1/1000s \n Portra 800',
      url: 'photos/Bonsai.jpg'
    },
    {
      title: 'Gazeebo',
      description: '8/25/2017 \n f/16 \n 50mm Zuiko \n 1/1000s \n Portra 800',
      url: 'photos/Gazeebo.jpg'
    },
    {
      title: 'Looking for the Crag',
      description: '10/2017 \n f/5.6 \n 50mm Zuiko \n 1/250 \n T-max 100 ',
      url: 'photos/LookingForTheCrag.jpg'
    },
    {
      title: 'Campfire',
      description: '8/2017 \n f/1.8 \n 50mm Zuiko \n 1/125s \n Portra 800',
      url: 'photos/Campfire.jpg'
    },
    {
      title: 'Music by Firelight',
      description: '8/2017 \n f/1.8 \n 50mm Zuiko \n 1/2s \n Portra 800',
      url: 'photos/MusicByFirelight.jpg'
    },
    {
      title: 'Spire',
      description: '8/2017 \n f/16 \n 50mm Zuiko \n 1/200s \n fuji 200',
      url: 'photos/SpireSunrise.jpg'
    },
    {
      title: "Don't Look Down",
      description: '8/2017 \n f/16 \n 300mm Zuiko \n 1/200s \n fuji 200',
      url: 'photos/DontLookDown.jpg'
    },
    {
      title: 'Good and Tired',
      description: '8/2017 \n f/16 \n 50mm Zuiko \n 1/200s \n fuji 200',
      url: 'photos/GoingDown.jpg'
    },
    {
      title: 'Sangre De Cristo Wilderness',
      description: '8/2017 \n f/5.6 \n 50mm Zuiko \n 1/200s \n fuji 200',
      url: 'photos/LastSign.jpg'
    },
    {
      title: 'Another Cool Sunset',
      description: '1/10/2015 \n (iPhone) ',
      url: 'photos/CloudFire.jpg'
    },
    {
      title: 'Eritrichum aretioides',
      description: '6/27/2016 \n (iPhone)',
      url: 'photos/SmallBlue.jpg'
    },
    {
      title: 'Arches NP',
      description: '7/2/2016 \n (iPhone)',
      url: 'photos/BlueAndRed.jpg'
    },
    {
      title: 'Fiery Furnace',
      description: '7/2/2016 \n (iPhone)',
      url: 'photos/Furnace.jpg'
    },
    {
      title: 'Loom',
      description: '9/9/2016 \n (iPhone)',
      url: 'photos/Loom.jpg'
    },
    {
      title: 'High Camp',
      description: '9/9/2016 \n (iPhone)',
      url: 'photos/Camp.jpg'
    },
    {
      title: 'The Sunrise',
      description: '9/10/2016 \n (iPhone)',
      url: 'photos/TheSunrise.jpg'
    },
    {
      title: 'Evening Beach',
      description:'7/17/2012 \n (iPhone)',
      url: 'photos/EveningBeach.jpg'
    },
    {
      title: 'Smeared Sky',
      description: '11/25/2012 \n (iPhone)',
      url: 'photos/SmearedSky.jpg'
    },
    {
      title: 'All Lined Up',
      description: '3/25/2013 \n (iPhone)',
      url: 'photos/AllLinedUp.jpg'
    },
    {
      title: 'The Traverse',
      description: '6/9/2017 \n (iPhone)',
      url: 'photos/Traverse.jpg'
    },
    {
      title: 'Aquilegia coerulea',
      description: '8/4/2013 \n (iPhone)',
      url: 'photos/PackOfColumbines.jpg'
    },
    {
      title: 'Sky, Rock, Snow',
      description: '5/20/2014 \n (iPhone)',
      url: 'photos/SkySnowRock.jpg'
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
