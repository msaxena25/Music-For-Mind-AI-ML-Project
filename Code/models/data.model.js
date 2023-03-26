const emotionsDataModel = {
  happy: {
    video: 'data/videos/happy_video.mp4',
    image: 'data/images/happy_img.jpeg',
    text: '<h2><strong>Looks happy! 😃</strong></h2> Keep Calm and carry on smiling! Enjoy some music.',
    searchText: 'Happy mood dance songs english dj',
  },
  neutral: {
    video: 'data/videos/happy_video.mp4',
    image: 'data/images/happy_img.jpeg',
    text: '<h2><strong>Looking cool. Great!</strong></h2> We have some Fun for you!',
    searchText: 'relex mood funny videos english mr beans',
  },
  sad: {
    video: 'mov_bbb.mp4',
    image: '',
    text: '<h2><strong>You look sad!🤔</strong></h2> Lets cheers you with some funny video. ',
    searchText: 'english stand up comedy latest videos funny',
  },
  angry: {
    video: 'mov_bbb.mp4',
    image: '',
    text: '<h2><strong>Looks Angry! 😠</strong></h2> Seeks some motivational videos to refresh your mind.',
    searchText: 'overcome anger motivation videos english',
  },
  surprised: {
    video: 'mov_bbb.mp4',
    image: '',
    text: '<h2><strong>Surprised! 😮</strong></h2> Relex & Enjoy some meditation music.',
    searchText: 'english 3d meditation music relax mind body',
  },
  disgusted: {
    video: '',
    image: 'so-excited-happy.gif',
    text: '<h2><strong>Why So disgusted? 🤨 </strong></h2> Have some fun & enjoy.',
    searchText: 'english comedy shows latest',
  },
  fearful: {
    video: 'mov_bbb.mp4',
    image: '',
    text: '<h2><strong>Feeling Scared! 😨 </strong></h2> We have something to relax your mood.',
    searchText: 'overcome fear songs english',
  },
};

// API Key - AIzaSyCEDxHvngAWqgQUP0KJ3w9nMKzOEfCZBb0

let sadData = [
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/_lt8gRMFCl0/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Balcony and Roommates | English Stand-up Comedy by Ashwin Srinivas | evam Standup Tamasha',
    'videoId': '_lt8gRMFCl0',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/P6aPg3YBvBQ/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'How Indians Do Timepass | Kanan Gill Stand-Up Comedy | Netflix India',
    'videoId': 'P6aPg3YBvBQ',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/HvC8iJNYQWU/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'iPhone on EMI | English Stand Up Comedy | Navin Kumar',
    'videoId': 'HvC8iJNYQWU',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/hq0BrSyYIM8/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'USA vs. Brazil | Rafi Bastos | Stand Up Comedy',
    'videoId': 'hq0BrSyYIM8',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/QhMO5SSmiaA/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': '&quot;How The British Took Over India&quot; - TREVOR NOAH (from &quot;Afraid Of The Dark&quot; on Netflix)',
    'videoId': 'QhMO5SSmiaA',
  },
];

let fearData = [
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/wMmmbJlWhtk/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'The Afters - I Will Fear No More (Official Lyric Video)',
    'videoId': 'wMmmbJlWhtk',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/4c9vV7Xerd8/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Fobi - Overcome Your Fears ( Green Wizards Records )',
    'videoId': '4c9vV7Xerd8',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/xBvaMT0itdA/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'The Afters - I Will Fear No More (Lyrics)',
    'videoId': 'xBvaMT0itdA',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/0AqnCSdkjQ0/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Eminem - Guts Over Fear ft. Sia',
    'videoId': '0AqnCSdkjQ0',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/EZVUBUDlgvs/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Isak Danielson - Face My Fears (Lyrics/Lyric Video)',
    'videoId': 'EZVUBUDlgvs',
  },
];

let happyData = [
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/dPGPMDduyyA/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'DJ Snake Greatst Hits 2021 Full Album   DJ Snake House, Bass, Dubstep, Electro Remix',
    'videoId': 'dPGPMDduyyA',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/gY230MyEcMg/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'New Mix Of Popular Songs Remix 2022 - Best Popular Songs Remix - English Songs Remixes 2022',
    'videoId': 'gY230MyEcMg',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/kKaF-sjG06g/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Party Songs Mix 2023 | Best Club Music Mix 2022| EDM Remixes &amp; Mashups Of Popular Songs 🔥',
    'videoId': 'kKaF-sjG06g',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/QqTs1KKjBew/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'New english  dj remix song -2021 [pcm new released ]',
    'videoId': 'QqTs1KKjBew',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/ixkoVwKQaJg/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B (Official Music Video)',
    'videoId': 'ixkoVwKQaJg',
  },
];

let disgustedData = [
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/C6C0JsWgT4Y/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Stand up comedy with subtitles| Learn English with stand up comedy| Entertaining speech',
    'videoId': 'C6C0JsWgT4Y',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/vzfuzwqGNJI/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Stand up comedy with subtitles| Learn English with stand up comedy| Entertaining speech',
    'videoId': 'vzfuzwqGNJI',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/QhMO5SSmiaA/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': '&quot;How The British Took Over India&quot; - TREVOR NOAH (from &quot;Afraid Of The Dark&quot; on Netflix)',
    'videoId': 'QhMO5SSmiaA',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/P6aPg3YBvBQ/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'How Indians Do Timepass | Kanan Gill Stand-Up Comedy | Netflix India',
    'videoId': 'P6aPg3YBvBQ',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/nCSx2BWGBNM/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'My brother doesn&#39;t share his girlfriend! || STEVE HARVEY',
    'videoId': 'nCSx2BWGBNM',
  },
];

let surprisedData = [
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/SUVVvni4W6I/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': '8D Meditation Music | Relax Mind Body (30 Minutes)',
    'videoId': 'SUVVvni4W6I',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/Gqfk5sr9fpw/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': '20 min Awareness Meditation Music Relax Mind Body: Chakra Cleansing and Balancing',
    'videoId': 'Gqfk5sr9fpw',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/BgMf2KCzEwE/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': '20 Minutes of Brain Massage (8D Audio)',
    'videoId': 'BgMf2KCzEwE',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/CszE2EHOP_M/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'Flute Relaxing Music | Meditation video 😌🎧| Relaxing Music | Mind fresh Music | Sleep song #relaxing',
    'videoId': 'CszE2EHOP_M',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/JYwUS06-5Ho/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': '🎧 Relaxing Music [8D AUDIO] Sleep Calm, Chill Out, Study, Meditation,',
    'videoId': 'JYwUS06-5Ho',
  },
];

let angryData = [
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/zpucCXdOSH8/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': '8 Ways to Overcome Anger',
    'videoId': 'zpucCXdOSH8',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/n4WZIis7T_8/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'YOU WILL NEVER GET ANGRY AFTER TAKING THIS MEDICINE OF ANGER | Buddha story on anger |',
    'videoId': 'n4WZIis7T_8',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/YOPPYCruJOw/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'How To Control Anger | Gaur Gopal Das Ji | Dr Vivek Bindra',
    'videoId': 'YOPPYCruJOw',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/QAsJvKsd2Xk/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'How to Control Anger - Sadhguru',
    'videoId': 'QAsJvKsd2Xk',
  },
  {
    'thumbnail': {
      'url': 'https://i.ytimg.com/vi/BWW-5Q_EzKM/default.jpg',
      'width': 120,
      'height': 90,
    },
    'title': 'GET ANGRY/GET TO WORK - The Most Powerful Motivational Videos for Success, Gym &amp; Study',
    'videoId': 'BWW-5Q_EzKM',
  },
];

const playlistDemoData = {
  sad: sadData,
  fearful: fearData,
  happy: happyData,
  surprised: surprisedData,
  angry: angryData,
  disgusted: disgustedData,
};
