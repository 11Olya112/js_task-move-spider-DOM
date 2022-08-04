'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.onclick = function(events) {
    const wallCoords = this.getBoundingClientRect();

    const spiderCoords = {
      top: events.clientY - wallCoords.top - wall.clientTop
      - spider.clientHeight / 2,
      left: events.clientX - wallCoords.left - wall.clientLeft
      - spider.clientWidth / 2,
    };

    if (spider.top < 0) {
      spiderCoords.top = 0;
    }

    if (spiderCoords.left < 0) {
      spiderCoords.left = 0;
    }

    if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
      spiderCoords.left = wall.clientWidth - spider.clientWidth;
    }

    if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
      spiderCoords.top = wall.clientHeight - spider.clientHeight;
    }

    spider.style.left = spiderCoords.left + 'px';
    spider.style.top = spiderCoords.top + 'px';
  };
});
