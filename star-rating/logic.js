const stars = document.querySelectorAll(".star");
let rating = -1; // stores clicked star index

stars.forEach((star, index) => {

  // hover
  star.addEventListener("mouseenter", () => {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("active");
    }
  });

  // mouse leave
  star.addEventListener("mouseleave", () => {
    stars.forEach((s, i) => {
      if (i <= rating) s.classList.add("active");
      else s.classList.remove("active");
    });
  });

  // click (LOCK)
  star.addEventListener("click", () => {
    rating = index;
  });

});
