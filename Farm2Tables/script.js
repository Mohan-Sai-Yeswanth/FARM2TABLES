let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingcart = document.querySelectorAll('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}
let loginform= document.querySelectorAll('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelectorAll('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    shoppingcart.classList.remove('active');
    searchform.classList.remove('active');
}


window.onscroll = () =>
{
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}



var swiper =new swiper(".profuct-slider", {
    loop:true,
    spacebetween:20,
    autoplay: {
        delay:7500,
        disableoninteration: false,
    },

    breakpoints: {
        0: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1020: {
            slidesperview: 3,
        },
    },
});


var swiper =new swiper(".review-slider", {
    loop:true,
    spacebetween:20,
    autoplay: {
        delay:7500,
        disableoninteration: false,
    },

    breakpoints: {
        0: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1020: {
            slidesperview: 3,
        },
    },
});