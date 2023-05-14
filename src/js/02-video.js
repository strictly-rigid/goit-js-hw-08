import Vimeo from '@vimeo/player';
import Throttle from 'lodash.throttle';
console.log(Vimeo);

    const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

    player.on('timeupdate', Throttle((data) => {
        localStorage.setItem("videoplayer-current-time", data.seconds);}, 1000));

    const pausedTime = localStorage.getItem('videoplayer-current-time');
    if (pausedTime) {
         player.setCurrentTime(pausedTime);
        }

