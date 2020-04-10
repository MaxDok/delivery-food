const cartButton = document.querySelector("#cart-button");
const off = document.querySelector("#off");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', function(){
    modal.classList.add("open");
});

close.addEventListener('click', function(){
    modal.classList.remove("open");
});
off.addEventListener('click', function(){
    modal.classList.remove("open");
});

new WOW().init();