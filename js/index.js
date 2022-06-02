
// header nav sticky
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

// responsive navbar

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});




// dark btutton

// document.getElementById('dark-btn').addEventListener('click', function () {
//     document.body.style.backgroundColor = 'goldenrod';
// })

















