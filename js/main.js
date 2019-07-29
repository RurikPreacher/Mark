$(document).ready(function () {
   // Drop-down menu
   $('.menu__icon').click(function () {
      $('ul.menu').slideToggle(500); 
      $('ul.menu').css({
         'position': 'fixed', 'display': 'block', 'top': '70px', 'right': '27px'
      })
   })
});