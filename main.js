
//al click su un elemento in lista, il sottomenù appare ogni volta che clicco su un elemento facendo scoparire quello cliccato in precedenza
$(document).ready(function() {
  $('li').click(function() { // se l'elemento è visibile il drop-down-menu sale
    if ($(this).children('.drop-down-menu').is(':visible')) {
      $('.drop-down-menu').slideUp();
    } else {
      $('.drop-down-menu').slideUp(); //al click su un altro drop-down-menu, scende quello cliccato e sale il dropdown menu  cliccato in precedenza
      $(this).children('.drop-down-menu').slideToggle();
    }
  });

  //Se viene visualizzato al di sotto dei 1000px
  $('.header-right > a').click(function() { //cliccando sull'icona dell'hamburger faccio apparire il menu
    $('.hamburger-menu').addClass('active');
  });
  $('.close').click(function() { //cliccando sull'icona della 'x' faccio scomparire il menu
    $('.hamburger-menu').removeClass('active');
  });
});
