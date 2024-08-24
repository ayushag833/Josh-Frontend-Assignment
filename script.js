// $(".card-section1").slick({
//   dots: true,
//   infinite: true,
//   arrows: false,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding: "5%",
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });

const btn1 = document.querySelector(".add-skill-1");
const btn2 = document.querySelector(".add-skill-2");
const cancel = document.querySelector(".cancel");
const modal = document.querySelector(".add-skill-modal");
const links = document.querySelectorAll("nav ul a");
const parentEle = document.querySelector("nav").parentElement;
const skillCard = document.querySelector(".card-section-skills");

btn1?.addEventListener("click", () => {
  modal.style.display = "block";
  modal.parentElement.classList.add("modal-overlay");
  window.scrollTo(0, 0);
});
btn2?.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  modal.parentElement.classList.remove("modal-overlay");
  window.scrollTo(0, 0);
});
cancel?.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  modal.parentElement.classList.remove("modal-overlay");
  window.scrollTo(0, 0);
});

let prevEle;
parentEle.className === "skills-container"
  ? (prevEle = links[1])
  : (prevEle = links[0]);
prevEle.classList.add("active");

let el;
switch (window.location.hash) {
  case "#projects":
    el = links[3];
    break;
  case "#recommendations":
    el = links[4];
    break;
  case "#contact":
    el = links[5];
    break;
}

if (el) {
  prevEle.classList.remove("active");
  prevEle = el;
  el.classList.add("active");
}

links.forEach((ele) => {
  ele.addEventListener("click", () => {
    prevEle.classList.remove("active");
    prevEle = ele;
    ele.classList.add("active");
  });
});

skillCard.innerHTML += ``;
