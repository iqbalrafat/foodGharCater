$('.navbar-toggler').click(()=>{
  $('.navbar-toggler').toggleClass('change')
})
//sticky navbar less padding-right
$(window).scroll(()=>{
  let position=$(this).scrollTop();  // here we are taking the value of the position of window and assign it to position.
  if(position>=718){
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  } else{
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }
})







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
    type:'image',
    gallery:{
      enabled: true
    }
    //other options
  });
 
});