
$(document).ready(function() {
  $('li').click(function() {  //al click su un elemento in lista
    if ($(this).children('.drop-down-menu').length > 1) {
      $('.drop-down-menu').slideUp();
    } else {           //il sottomenù appare ogni volta che clicco su un elemento, facendo scoparire quello cliccato in precedenza
      $('.drop-down-menu').slideUp();
      $(this).children('.drop-down-menu').slideToggle();
    }
  });
});
