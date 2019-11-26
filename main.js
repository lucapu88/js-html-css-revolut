// $(document).ready(function() {
//   $('.header-right > a').click(function() { //cliccando sull'icona dell'hamburger faccio apparire il menu
//     $('.hamburger-menu').addClass('active');
//   });
//   $('.close').click(function() { //cliccando sull'icona della 'x' faccio scomparire il menu
//     $('.hamburger-menu').removeClass('active');
//   });
// })
$(document).ready(function() {
  $('li').click(function() {
    if ($(this).children('.drop-down-menu').length > 1) {
      $('.drop-down-menu').slideUp();
    } else {
      $('.drop-down-menu').slideUp();
      $(this).children('.drop-down-menu').slideToggle();
    }
  });
});
