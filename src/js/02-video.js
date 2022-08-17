import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// const Player = require('@vimeo/player');
// const throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player
  .setCurrentTime(localStorage.getItem('currentTime') || 0)
  .then(seconds => console.log(seconds))
  .catch(err => console.log(err));

player.on('timeupdate', throttle(onPlaying, 1000));

function onPlaying() {
  player
    .getCurrentTime()
    .then(seconds => {
      localStorage.setItem('currentTime', seconds);
    })
    .catch(err => console.log(err));
}
