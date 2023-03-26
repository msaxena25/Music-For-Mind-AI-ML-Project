$(document).ready(function () {
    $('#coolStuffDiv').hide();
    $('.loader-div').hide();
    $('#myHeading').hide();
    initFaceDetectionControls();
    run();
});


async function loadImageFromUpload() {
    $('.loader-div').show(); // show loader
    $('#coolStuffDiv').hide(); // hide video div
    $('#myHeading').hide();
    const imgFile = $('#queryImgUploadInput').get(0).files[0];
    const img = await faceapi.bufferToImage(imgFile);
    $('#inputImg').get(0).src = img.src;
    updateResults();
}

let thresh = 0.1;

async function updateResults() {
    if (!isFaceDetectionModelLoaded()) {
        return;
    }

    const inputImgEl = $('#inputImg').get(0);
    const options = getFaceDetectorOptions();
    const results = await faceapi
        .detectAllFaces(inputImgEl, options)
        // compute face landmarks to align faces for better accuracy
        .withFaceLandmarks()
        .withFaceExpressions();
    const canvas = $('#overlay').get(0);
    faceapi.matchDimensions(canvas, inputImgEl);

    const resizedResults = faceapi.resizeResults(results, inputImgEl);
    const minConfidence = 0.05;
    // faceapi.draw.drawDetections(canvas, resizedResults)
    const response = faceapi.draw.drawFaceExpressions(canvas, resizedResults, minConfidence);
    //  alert('You are ' + response[0].expression);
    displayCoolStuff(response[0].expression);
}

async function run() {
    // load face detection and face expression recognition models
    // and load face landmark model for face alignment
    await changeFaceDetector(SSD_MOBILENETV1);
    await faceapi.loadFaceLandmarkModel('/data');
    await faceapi.loadFaceExpressionModel('/data');
}



var firstVideoIdToPlay = '';
var loadFirstTime = true;

async function displayCoolStuff(emotion) {
    const playlistData = await getPlayList(emotion);
    // const playlistData = playlistDemoData[emotion];
    const ulSection = $('#playlistId');
    $('#playlistId').empty(); // clear old list
    firstVideoIdToPlay = playlistData[0].videoId;
    if (loadFirstTime) {
        loadFirstTime = false;
        loadYoutubeIframe();
    } else {
        player.loadVideoById(firstVideoIdToPlay);
    }

    playlistData.forEach((resource, id) => {
        const img = resource.thumbnail;
        const li = `<li key=${id}>
             <a href=https://www.youtube.com/watch?v=${resource.videoId} target='_blank'>
                <div class='row'>
                    <div class='col s2'>
                        <img class='thumbnail' width = ${img.width} height = ${img.height} src = ${img.url} alt = "" />
                    </div>

                    <div class='col s10'>
                        <span class='video-title'>
                        ${resource.title}</span>
                    </div>
                </div>
             </a>
         </li > `;
        ulSection.append(li);
    });
    $('#myHeading').show();
    $('#coolStuffDiv').show();
    $('.loader-div').hide();
    if (emotionsDataModel[emotion].text) {
        var text = document.getElementById('myHeading');
        text.innerHTML = emotionsDataModel[emotion].text;
    }
    // loadYoutubeIframe();
}

async function getPlayList(emotion) {
    const YOUTUBE_API_KEY = 'AIzaSyCEDxHvngAWqgQUP0KJ3w9nMKzOEfCZBb0';
    const query = emotionsDataModel[emotion].searchText;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    var videos = data.items;
    var playlist = [];
    videos.forEach((video) => {
        const snippet = video.snippet;
        const obj = {
            thumbnail: snippet.thumbnails.default,
            title: snippet.title,
            videoId: video.id.videoId,
        };
        playlist.push(obj);
    });
    return playlist;
}

function loadYoutubeIframe() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '300',
        width: '600',
        videoId: firstVideoIdToPlay,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 60000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
