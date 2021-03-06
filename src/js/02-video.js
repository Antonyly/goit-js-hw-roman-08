import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const playerEl = new Player(iframe);

playerEl.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
  playerEl.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

