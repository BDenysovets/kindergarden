let header_link  = document.querySelectorAll(".nav__item");

header_link.forEach(item => {
  item.addEventListener("click", function(e) {
    item.classList.toggle('nav__item--active');
  })
});

document.addEventListener("click", function(e) {
  console.log(e.target.className);
})
