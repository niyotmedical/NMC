$(document).ready(function(){
  $('section.one').eq(1).css({
    'background':'rgba(240, 240, 240, 1)'
  });
    $('.object').eq(0).css({
      'background':'url(https://s6.postimg.org/yzw4tptox/baby.jpg)',
      'background-size':'cover',
      'background-position': 'center center'
    });
    $('.object').eq(2).css({
      'background':'url(https://s6.postimg.org/nq3eyronl/phone.jpg)',
      'background-size':'cover',
      'background-position': 'center center'
    });
  $('.object').eq(1).css({
    'background':'url(https://s6.postimg.org/hnvs8a07l/heart.jpg)',
    'background-size':'cover',
    'background-position': 'center center'
  });
  $('section.one').eq(3).css({
    'background':'rgba(240, 240, 240, 1)'
  });

$('.unit').each(function(i){
  setTimeout(function(){
    $('.unit').eq(i).addClass('fadeInUp');
  },i * 400);
});
$('.here').each(function(i){
  setTimeout(function(){
    $('.here').eq(i).addClass('slideInDown');
  },i * 50);
});
});
$(window).scroll(function(){
});
