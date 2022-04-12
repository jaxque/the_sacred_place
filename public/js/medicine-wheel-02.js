'use strict';


AFRAME.registerComponent('wheel-02-appear', { 
  init: function() {
    const Context_AF = this;

    Context_AF.wheel02      = document.getElementById("MedicineWheel_02");
    Context_AF.isVisible = false;
    
    //listen on click
    Context_AF.el.addEventListener('click', function() {
        if (Context_AF.isVisible === true) {
          console.log('invisible');
          Context_AF.wheel02.setAttribute('visible', {enabled:false});
          Context_AF.isVisible = false;
        }
        else {
          console.log('visible');
          Context_AF.wheel02.setAttribute('visible', {enabled:true});
          Context_AF.isVisible = true;
        }
      });
  }

});