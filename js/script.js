let header = document.querySelector("header");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    header.style.boxShadow = "0px 0px 10px #888888";
    header.style.transition = "box-shadow 0.5s ease-in-out";
  } else {
    header.style.boxShadow = "none";
    header.style.transition = "box-shadow 0.5s ease-in-out";
  }
};

const buyerChanger = document.querySelector(".buyer-changer");
const buyerChangerClass = buyerChanger.classList;

const $ = (i) => document.querySelector(i);
const idItem = (i) => document.getElementById(i);

const checkBuyers = (onClick = false) => {
  if (onClick) {
    if (buyerChangerClass.contains("buyer")) {
      buyerChangerClass.add("owner");
      buyerChangerClass.remove("buyer");

      idItem("owner-para").classList.add("active");
      idItem("buyer-para").classList.remove("active");
      idItem("owner-page").classList.add("active");
      idItem("buyer-page").classList.remove("active");
    } else {
      buyerChangerClass.add("buyer");
      buyerChangerClass.remove("owner");

      idItem("owner-para").classList.remove("active");
      idItem("buyer-para").classList.add("active");
      idItem("owner-page").classList.remove("active");
      idItem("buyer-page").classList.add("active");
    }
  } else {
    if (!buyerChangerClass.contains("buyer")) {
      idItem("owner-para").classList.add("active");
      idItem("buyer-para").classList.remove("active");
      idItem("owner-page").classList.add("active");
      idItem("buyer-page").classList.remove("active");
    } else {
      idItem("owner-para").classList.remove("active");
      idItem("buyer-para").classList.add("active");
      idItem("owner-page").classList.remove("active");
      idItem("buyer-page").classList.add("active");
    }
  }
};

checkBuyers();

buyerChanger.onclick = (e) => checkBuyers(true);

const swiper = new Swiper(".slider-head", {
  spaceBetween: 50,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".head-button-prev",
    nextEl: ".head-button-next",
  },
});
const swiper2 = new Swiper(".slider-body", {
  spaceBetween: 50,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".body-button-next",
    prevEl: ".body-button-prev",
  },
});

const checkElementOnScroll = (i, el) => {
  const element = document.querySelector(i);
  const position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    $(el).classList.add("active");
  } else {
    $(el).classList.remove("active");
  }
};

window.addEventListener("scroll", function () {
  checkElementOnScroll(".onblock_land", ".buyer-link_land");
  checkElementOnScroll(".onblock_start", ".buyer-link_main");
  checkElementOnScroll(".onblock_documents", ".buyer-link_documents");
  checkElementOnScroll(".onblock_rent", ".buyer-link_rent");

  checkElementOnScroll(".onblock_start-2", ".buyer-link_main-2");
  checkElementOnScroll(".onblock_country-side", ".buyer-link_country-side");
  checkElementOnScroll(".onblock_buildings", ".buyer-link_buildings");
  checkElementOnScroll(".onblock_map", ".buyer-link_map");
});