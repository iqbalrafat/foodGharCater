$(document).ready(function(){
//  added ripple effect
//we use header where we like to effect of ripple. radius in pixel
  $("#header, .info").ripples({
    dropRadius: 25,  
    perturbance: 0.01,
  });
 
})