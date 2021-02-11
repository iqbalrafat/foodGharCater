$(document).ready(function(){
//  added ripple effect
//we use header where we like to effect of ripple. radius in pixel
  $("#header, .info").ripples({
    dropRadius: 25,  
    perturbance: 0.01,
  });
  //maginific popup
  $('.parent-container').magnificPopup({
    delegate:'a',//child items selector, by clicking on it popup will open the
    type:'image'
    //other options
  });
 
});