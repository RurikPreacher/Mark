$(document).ready(function () {
   // Drop-down menu
   $('.menu__icon').click(function () {
      $('nav').slideToggle(500);
      $('ul.menu').css({
         // 'display':'flex', 'flex-direction':'column',
         'position': 'fixed', 'display': 'block', 'top': '110px', 'right': '65px'
      })
      // if($('.menu__icon').html()=='<i class="fas fa-bars"></i>') {
      //    $(this).html('<i class="fas fa-times"></i>')
      // } else {
      //    $(this).html('<i class="fas fa-bars"></i>')
      // }
   })
});