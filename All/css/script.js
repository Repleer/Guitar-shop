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
  var f = document.getElementsByClassName("Arrow");
  let r = document.body;
  let bl = document.getElementById("blur");

  if (x.style.display == "block") {
    x.classList.add("closing");
    document.body.style.overflowY = "";

    bl.style.display = "none";
    bl.style.backdropFilter = "blur(0px)";

    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
      f[i].style = "transform:rotate(0);";
      f[i].classList.remove("ArrowR");
      if (i > y.length) {
        break;
      }
    }
    setTimeout(function () {
      x.style.display = "none";
      x.classList.remove("closing");
    }, 450);
  } else {
    x.style.display = "block";
    setTimeout(function () {
      bl.style.display = "block";
      bl.style.backdropFilter = "blur(8px)";
    }, 400);
    document.body.style.overflowY = "hidden";
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

  for (i = 0; i < x.length; i++) {
    if (i != p) {
      x[i].classList.remove("gitas");

      x[i].classList.add("closing2");

      f[i].classList.remove("ArrowR");
      f[i].classList.add("ArrowRev");
      setTimeout(function () {
        x[i].style.display = "none";

        f[i].style = "transform : rotate(0)";
        f[i].classList.remove("ArrowRev");
        x[i].classList.remove("closing2");
        x[i].classList.add("gitas");
      }, 450);
      break;
    }
  }
}
function CreateGoods(title, price, ImgUrl, fea0, fea1, fea2) {
  // Price in USD
  var currency = price + " USD";

  // Container
  var GuitarHolder = document.getElementById("Guitar-holder");

  // Guitar Block
  var GuitarDiv = document.createElement("div");
  GuitarDiv.className = "product";

  // Img
  var image = document.createElement("img");
  image.className = "Holder-img";
  image.src = ImgUrl;
  image.alt = title + " Image";

  // Title
  var titleG = document.createElement("h1");
  titleG.textContent = title;
  titleG.className = "getTitle";

  // Info block in Guitar block
  var info = document.createElement("div");
  info.className = "info";

  // Price
  var GetPrice = document.createElement("span");
  GetPrice.className = "GetPrice";
  GetPrice.textContent = currency;

  // Shopping cart
  var cart = document.createElement("span");
  cart.className = "buy";
  var link = document.createElement("a");
  link.href = "/";
  var cartI = document.createElement("img");
  cartI.className = "cart";
  cartI.src = "img/shopping_cart (1).svg";
  link.appendChild(cartI);
  cart.appendChild(link);

  // Features
  var Desc = document.createElement("div");
  Desc.className = "description";
  var list = document.createElement("ul");
  Desc.appendChild(list);

  var ftr0 = document.createElement("li");
  ftr0.className = "getDescription";
  ftr0.textContent = fea0;

  var ftr1 = document.createElement("li");
  ftr1.className = "getDescription";
  ftr1.textContent = fea1;

  var ftr2 = document.createElement("li");
  ftr2.className = "getDescription";
  ftr2.textContent = fea2;

  // List elements
  list.appendChild(ftr0);
  list.appendChild(ftr1);
  list.appendChild(ftr2);

  // Full description
  Desc.appendChild(list);

  // Info about everything
  info.appendChild(GetPrice);
  info.appendChild(cart);
  info.appendChild(Desc);

  GuitarDiv.appendChild(image);
  GuitarDiv.appendChild(titleG);
  GuitarDiv.appendChild(info);

  GuitarHolder.appendChild(GuitarDiv);
}
