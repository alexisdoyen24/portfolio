window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// MENU BURGER---------------------------------------
let menuBurger = document.getElementById("menuBurger");
// console.log("test");
menuBurger.addEventListener("click", function(){
    let dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("displayNone");
});

// ANIMATION CROIX
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
})
