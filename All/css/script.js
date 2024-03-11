let slideIndex = 0;

showSlides(slideIndex);

// Next/previous controls

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function AutoSlide() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  slideIndex++;
  currentSlide(slideIndex);
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  slides[slideIndex - 1].style.display = "block";
  setTimeout(AutoSlide, 12000);
}
function Menu() {
  var x = document.getElementById("MenuB");
  var y = document.getElementsByClassName("gita");
  if (x.style.display == "block") {
    x.classList.add("closing");

    setTimeout(function () {
      x.style.display = "none";
      x.classList.remove("closing");
    }, 450);
  } else {
    x.style.display = "block";
  }
}

function GuitarCat(p) {
  var x = document.getElementsByClassName("gita");
  var f = document.getElementsByClassName("Arrow");

  if (x[p].style.display == "block") {
    x[p].classList.remove("gitas");
    f[p].classList.remove("ArrowR");
    f[p].classList.add("ArrowRev");

    x[p].classList.add("closing2");
    setTimeout(function () {
      x[p].style.display = "none";

      f[p].style = "transform : rotate(0)";
      f[p].classList.remove("ArrowRev");
      x[p].classList.remove("closing2");
      x[p].classList.add("gitas");
    }, 450);
  } else {
    f[p].classList.add("ArrowR");
    f[p].style = "transform : rotate(-0.5turn)";
    x[p].style.display = "block";
  }
}
