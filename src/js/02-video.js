import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function playTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(playTime, 1000));

const stopTime = localStorage.getItem('videoplayer-current-time');

if (stopTime) {
  player.setCurrentTime(stopTime);
}
