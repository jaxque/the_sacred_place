'use strict';


AFRAME.registerComponent('wall-interaction-1', { 
  init: function() {
    const Context_AF = this;

    let scene = document.querySelector('a-scene');

    //create entity 
    let entityBox  = document.createElement('a-entity')
    
    //listen on click
    Context_AF.el.addEventListener('mousedown', function() {

      if (document.getElementById("pop_art")) {
        //remove shape from scene 
        console.log('removed');
        scene.removeChild(entityBox);

        //remove shape attributes
        entityBox.removeAttribute('geometry');
        entityBox.removeAttribute('position');
        entityBox.removeAttribute('material');
      }
      else if (!document.getElementById("pop_art")){
        //add shape to scene 
        console.log('added');
        scene.appendChild(entityBox);

        //set shape attributes 
        entityBox.setAttribute('geometry', {
          primitive: 'box',
          height: 0.5,
          width: 0.5,
          depth: 0.5
        });
        entityBox.setAttribute('position', {x: -28, y: 2, z: -5});
        entityBox.setAttribute('material', 'color', 'red');
        entityBox.setAttribute('id', "pop_art");
      }
    });
  }

});