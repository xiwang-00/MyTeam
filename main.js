let overlay = document.querySelector(".overlay")
let burgerMenu = document.querySelector('.mobile-menu')
let burger = document.querySelector('#burger-link')
let lineONe = document.querySelector(".line--one")
let lineTwo = document.querySelector(".line--two")
let lineThree = document.querySelector(".line--three")
let links = document.querySelector(".mobile-menu__links")
let link = document.querySelector(".mobile-menu__link")
let button = document.querySelector(".mobile-menu__right")
let circle = document.querySelector(".circle")
let boxTwo = document.querySelector(".box-two")


burger.addEventListener('click', function() {
 overlay.classList.toggle("open")
 burgerMenu.classList.toggle("width")
 lineONe.classList.toggle("one")
 lineTwo.classList.toggle("two")
 lineThree.classList.toggle("three")
 links.classList.toggle("d-block")
 link.classList.toggle("d-block")
 button.classList.toggle("d-block")
});

circle.addEventListener('click', function(){
boxTwo.classList.toggle("opacity")
circle.classList.toggle("rotate")
});