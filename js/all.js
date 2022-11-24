
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const timeline = gsap.timeline();

const count = $('.dialogue__item').length;
for(var i=0 ; i < count ; i++){
  timeline.from($('.dialogue__item:nth(' + i +')'), {autoAlpha: 0,duration: 2});
};


$('.star_challenge').on('click' , function(){
  window.location.href = "guide.html";
});
$('.accept_challenge').on('click' , function(){
  window.location.href = "undone.html";
});
$('.understand').on('click' , function(){
  window.location.href = "test.html";
});

