'use strict';

AFRAME.registerComponent('storm-sounds', {
    init:function() {
       let playing = false;
       let audio = document.querySelector("#audio");
       this.el.addEventListener('click', () => {
            if(!playing) {
                audio.play();
                console.log("playing")
             } else {
                audio.pause();
                audio.currentTime = 0;
             }
             playing = !playing;
       });
    }
  });