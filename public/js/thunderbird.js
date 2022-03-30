'use strict';


AFRAME.registerComponent('thunderbird-appear', { 
  init: function() {
    const Context_AF = this;

    Context_AF.thunderbird      = document.getElementById("thunderbird");
    Context_AF.isVisible = false;
    
    //listen on click
    Context_AF.el.addEventListener('click', function() {
        if (Context_AF.isVisible === true) {
          console.log('invisible');
          Context_AF.thunderbird.setAttribute('visible', {enabled:false});
          Context_AF.isVisible = false;
        }
        else {
          console.log('visible');
          Context_AF.thunderbird.setAttribute('visible', {enabled:true});
          Context_AF.isVisible = true;
        }
      });
  }

});