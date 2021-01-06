let overlay = document.querySelector(".overlay")
let burgerMenu = document.querySelector('.mobile-menu')
let burger = document.querySelector('#burger-link')
let lineONe = document.querySelector(".line--one")
let lineTwo = document.querySelector(".line--two")
let lineThree = document.querySelector(".line--three")
let links = document.querySelector(".mobile-menu__links")
let link = document.querySelector(".mobile-menu__link")
let button = document.querySelector(".mobile-menu__right")

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


var circle = document.querySelectorAll('.circle');
var boxTwo = document.querySelectorAll('.box-two');

function allClassRemover(clickedElement) {
    circle.forEach(item => {
        if (item.dataset.itemOrder !== clickedElement.dataset.itemOrder) {
            item.classList.remove('rotate')
        }
        else {
            item.classList.toggle('rotate')
        }
    })
    boxTwo.forEach(itemTwo =>{
        if (itemTwo.dataset.itemOrder !== clickedElement.dataset.itemOrder) {
            itemTwo.classList.remove("opacity")
        }
        else {
            itemTwo.classList.toggle("opacity")
        }
    })
}

circle.forEach((item,itemTwo,index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        allClassRemover(item,itemTwo,index);

    })
}
)
