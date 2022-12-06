var toggle = document.querySelector('#toggle');
var menu = document.querySelector('#menu');

toggle.addEventListener('click', function(){
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
    //change i class
    document.querySelector('#menu_icon').className = "fa-solid fa-bars"
  } else {
    menu.classList.add('is-active'); 
    this.setAttribute('aria-expanded', 'true');
    //change i class
    document.querySelector('#menu_icon').className = "fa-solid fa-xmark"
  }
});

//remove is-active class when screen resizes 
const mediaQuery = window.matchMedia('(min-width: 770px)');
window.addEventListener('resize', function(){
    if (mediaQuery.matches) {
        menu.classList.remove('is-active');
    };
});

document.querySelector('#shopcart').addEventListener('click', function(){
    alert('Sorry! This feature is not currently available as the shop is on hiatus since everything is sold out.')
});