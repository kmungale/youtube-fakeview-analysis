var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }

function onPlayerReady() {
    console.log("the player is ready");
}

function onPlayerStateChange() {
    console.log("The player has changed its state");
}


$("window").mousemove(function(event){
   $(event.target).on('mousemove', function(){
       console.log("moving mouse");
   })
});