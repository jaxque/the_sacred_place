'use strict';


AFRAME.registerComponent('spirits-appear', { 
  init: function() {
    const Context_AF = this;

    Context_AF.spirits     = document.getElementById("spirits");
    Context_AF.isVisible = false;
    
    //listen on click
    Context_AF.el.addEventListener('click', function() {
        if (Context_AF.isVisible === true) {
          console.log('invisible');
          Context_AF.spirits.setAttribute('visible', {enabled:false});
          Context_AF.isVisible = false;
        }
        else {
          console.log('visible');
          Context_AF.spirits.setAttribute('visible', {enabled:true});
          Context_AF.isVisible = true;
        }
      });
  }

});