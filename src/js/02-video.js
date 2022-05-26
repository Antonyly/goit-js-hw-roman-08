import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const playerEl = new Player(iframe);

playerEl.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ sec }) {
  localStorage.setItem('videoplayer-current-time', sec);
}

playerEl.setCurrentTime(localStorage.getItem('videoplayer-current-time'));