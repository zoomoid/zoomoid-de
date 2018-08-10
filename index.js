let PLAYING = 0, PAUSED = 1, ENDED = 2, NONE = 3;

var player = {
  currentlyPlaying: undefined,
  state: NONE,
  volume: 1,
  volumeControlIsDragging: false,
  notify: function(message){
    // TODO implement a more fancy way for this
    alert(message);
  },
  setVolume: function(vol) {
    $('.player').each(function() {
      let media = $(this).children('audio').get(0);
      media.volume = Math.max(0, Math.min(1, vol));
    });
    this.volume = Math.max(0, Math.min(1, vol));
  },
  setCurrentlyPlaying: function(song){
    if(song !== undefined){
      this.currentlyPlaying = song;
      $('.dock .currentlyPlaying').text(song.attr('data-track'));
    }
    return this;
  },
  play: function(){
    this.setState(PLAYING);
    return this;
  },
  pause: function(){
    this.setState(PAUSED);
    return this;
  },

  _changePlayPause: function(state, song, callback){
    this.state = state;
    if(this.currentlyPlaying && state >= 0 && state <= 1){
      (state === PLAYING
        ? this.currentlyPlaying.find('audio').get(0).play()
        : this.currentlyPlaying.find('audio').get(0).pause()
      );
      callback();
    } else {
      console.error("Non-playable source found");
      player.notify("Something went terribly wrong! We are sorry!");
      return false;
    }
  },
  _pause: function(){
    return this._changePlayPause(PAUSED, this.currentPlaying, function(){});
  },
  _play: function(){
    return this._changePlayPause(PLAYING, this.currentPlaying, function(){});
  },
  setState: function(state){
    let s;
    switch(state){
      case PLAYING:
        s = this._play();
        $('.dock i').removeClass('fa-play fa-stop').addClass('fa-pause');
        $('.dock').slideDown(200)
        break;
      case PAUSED:
        s = this._pause();
        $('.dock i').removeClass('fa-pause fa-stop').addClass('fa-play');
        break;
      case ENDED:
        this.state = ENDED;
        this.currentlyPlaying = undefined;
        s = true;
        $('.dock i').removeClass('fa-play fa-pause').addClass('fa-stop');
        $('.dock').slideUp(200);
        break;
      default: break;
    }

    if(state >= 0 && state <= 2 && s === true){
      return true;
    } else {
      return false;
    }
  }
};

(function() {
  let resetPlayButton = function(e){
    e.find('.play-button i').removeClass('fa-play fa-pause fa-undo');
    return e.find('.play-button i');
  };

  $('.dock').slideUp();
  $('.player').each(function(e) {
    // 1. create play button
    let playButton = $('<a class="play-button"><i class="fas fa-play"></i></a>');
    let playState = $('<div class="play-state"><div class="indicator"></div></div>');
    let media = $(this).children('audio');

    // 2. create event handler
    playButton.click(function() {
      let parent = $(this).parent();

      if(parent.hasClass('is-finished')){
        // reset
        parent.children('audio').get(0).currentTime = 0;
        resetPlayButton(parent);
      } else {
        if(parent.hasClass('is-playing')){
          // currently playing -> pause()
          if(player.state === PLAYING){
            player.pause();
          }
          parent.removeClass('is-playing');
          resetPlayButton(parent).addClass('fa-play');
        } else {
          if(player.state === PLAYING){
            // another song is playing
            // pause currently playing song
            player.currentlyPlaying.removeClass('is-playing');
            player.pause();
            resetPlayButton(player.currentlyPlaying).addClass('fa-play');
          }
          // paused -> play()
          player.setCurrentlyPlaying(parent);
          player.play();
          parent.addClass('is-playing');
          resetPlayButton(parent).addClass('fa-pause');
          // let seconds = Math.floor(media[0].duration % 60), minutes = Math.floor(media[0].duration / 60);
          // if(minutes == NaN || seconds == NaN){
          //   $('.dock .duration').text("--:--");
          // } else {
          //   $('.dock .duration').text((minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds));
          // }
        }
      }
    });

    media.on("timeupdate", function() {
      let ratio = (media[0].currentTime / media[0].duration);
      playState.children('.indicator').css("width", (ratio * 100) + "%");
      $('.dock .play-state .indicator').css("width", (ratio * 100) + "%");
      let seconds = Math.floor(media[0].currentTime % 60), minutes = Math.floor(media[0].currentTime / 60);
      $('.dock .currtime').text((minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds));
      seconds = Math.floor(media[0].duration % 60);
      minutes = Math.floor(media[0].duration / 60);
      $('.dock .duration').text((minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds));
    });

    media.get(0).onended = function() {
      let current = player.currentlyPlaying;
      current.addClass('is-finished');
      current.removeClass('is-playing');
      current.children('audio').get(0).pause();
      resetPlayButton(current).addClass('fa-undo');
      //player.setCurrentlyPlaying();
      player.setState(ENDED);
    };
    // 3. append play button
    $(this).append(playButton);
    //$(this).append(playState);
  });

  $('.volume-control').on('mouseup', function(){
    player.volumeControlIsDragging = false;
  }).on('mousedown', function(){
    player.volumeControlIsDragging = true;
  }).on('mousemove', function(){
    if(player.volumeControlIsDragging){
      player.setVolume($(this).val() / 100);
    }
  });

  $('.dock .play-button').on('click', function(){
    switch(player.state){
      case PLAYING :
        if(player.state === PLAYING){
          player.currentlyPlaying.removeClass('is-playing');
          resetPlayButton(player.currentlyPlaying).addClass('fa-play');
        }
        player.pause();
        break;
      case PAUSED :
        if(player.state === PLAYING){
          player.currentlyPlaying.removeClass('is-playing');
          resetPlayButton(player.currentlyPlaying).addClass('fa-play');
        }
        player.play(); break;
      default: break;
    }
  });
})();
