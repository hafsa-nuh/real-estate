/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) {
  navElemArr.push(navbarLinks[i]);
}

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// const swiper = new Swiper(".popular_container", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   centeredSlides: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item)=>{
  const accordionHeader = item.querySelector(".value__accordion-header");

  accordionHeader.addEventListener('click', ()=>{
    const openItem = document.querySelector(".accordion-open");

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }

    toggleItem(item)
  })
})

const toggleItem = (item)=>{
  const acordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")){
    acordionContent.removeAttribute('style')
    item.classList.remove("accordion-open");
  }else{
    acordionContent.style.height = acordionContent.scrollHeight + "px";
    item.classList.add('accordion-open')
  }
}