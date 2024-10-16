import data from "./data.js";

const btn1 = document.querySelector(".add-skill-1");
const cancel = document.querySelector(".cancel");
const modal = document.querySelector(".add-skill-modal");
const links = document.querySelectorAll("nav ul a");
const skillCard = document.querySelector(".card-section-skills");
const form = document.querySelector(".add-skill-modal form");
const form1 = document.querySelector(".my-info form");
const domain = document.getElementById("domain");
const skill = document.getElementById("skill");
const proficiency = document.getElementById("proficiency");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const msg = document.getElementById("msg");
const message = document.getElementById("message");
const contactModal = document.querySelector(".contact-modal");
const confirmBtn = document.querySelector(".confirm-btn");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav ul li a");
const navLinks = document.querySelector(".nav-links");

menuLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

burger?.addEventListener("click", () => {
  nav.classList.toggle("open");
  navLinks.style.display = "flex";
});

let h6 = document.createElement("h6");
const overlay = document.createElement("div");
let i = 1;

function addValidation(type, input, color, flag) {
  if (flag) {
    h6.classList.add("validation1");
    input.insertAdjacentElement("afterend", h6);
  }

  const existingImg = input.nextElementSibling;
  if (existingImg && existingImg.tagName === "IMG") {
    existingImg.remove();
  }

  const img = document.createElement("img");
  img.src = `images/contact-images/${type}.png`;
  img.classList.add("icon");
  img.style.zIndex = i;
  i++;
  switch (input) {
    case email:
      img.style.top = "10.75rem";
      break;
    case subject:
      img.style.top = "17.125rem";
      break;
    case msg:
      img.style.top = "22.75rem";
      break;
  }
  input.insertAdjacentElement("afterend", img);
  if (input === msg) message.style.border = `2px solid ${color}`;
  else input.style.border = `2px solid ${color}`;
}

form1?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form1);
  let obj = {};
  let isValid = true;
  let fullnameValid = false,
    emailValid = false,
    subjectValid = false,
    msgValid = false;
  formData.forEach((value, key) => {
    if (isValid && key === "Full Name" && value === "") {
      h6.textContent = "* Enter Full Name";
      addValidation("delete", fullname, "red", true);
      fullnameValid = false;
      isValid = false;
    } else if (fullnameValid) {
      addValidation("circle", fullname, "green", false);
      fullnameValid = true;
    }
    if (isValid && key === "Email" && value === "") {
      h6.textContent = "* Enter Email";
      addValidation("delete", email, "red", true);
      emailValid = false;
      fullnameValid = true;
      isValid = false;
    } else if (emailValid) {
      addValidation("circle", email, "green", false);
      emailValid = true;
    }
    if (isValid && key === "Subject" && value === "") {
      h6.textContent = "* Enter Subject";
      addValidation("delete", subject, "red", true);
      subjectValid = false;
      emailValid = true;
      fullnameValid = true;
      isValid = false;
    } else if (subjectValid) {
      addValidation("circle", subject, "green", false);
      subjectValid = true;
    }
    if (isValid && key === "Message" && value === "") {
      h6.textContent = "* Enter Message";
      addValidation("delete", msg, "red", true);
      msgValid = false;
      subjectValid = true;
      emailValid = true;
      fullnameValid = true;
      isValid = false;
    } else if (msgValid) {
      addValidation("circle", msg, "green", false);
      msgValid = true;
    }
    if (isValid && value) {
      obj[key.trim()] = value.trim();
    }
  });
  if (!isValid) {
    window.scrollTo(0, 2450);
    return;
  }
  resetEverything();
  console.log("Your Details :- ", obj);
  contactModal.style.left = "50%";
});

function resetEverything() {
  form1.reset();
  h6.remove();
  const arr = [fullname, email, subject, msg];
  for (let i = 0; i < 4; i++) {
    if (arr[i] === msg) message.style.border = "none";
    else arr[i].style.border = "none";

    while (
      arr[i].nextElementSibling &&
      arr[i].nextElementSibling.tagName === "IMG"
    ) {
      arr[i].nextElementSibling.remove();
    }
  }
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let obj = {};
  let isValid = true;
  formData.forEach((value, key) => {
    if (isValid && key === "domain" && value === "") {
      h6.textContent = "* Enter Domain";
      h6.classList.add("validation");
      domain.insertAdjacentElement("afterend", h6);
      isValid = false;
    }
    if (isValid && key === "skill1" && value === "") {
      h6.textContent = "* Enter atleast one skill";
      h6.classList.add("validation");
      skill.insertAdjacentElement("afterend", h6);
      isValid = false;
    }
    if (isValid && key === "number1" && value === "") {
      h6.textContent = "* Enter proficiency of first skill";
      h6.classList.add("validation");
      proficiency.insertAdjacentElement("afterend", h6);
      isValid = false;
    }
    if (isValid && value) {
      obj[key.trim()] = value.trim();
    }
  });
  if (
    isValid &&
    ((obj.skill2 === undefined && obj.number2 !== undefined) ||
      (obj.skill2 !== undefined && obj.number2 === undefined) ||
      (obj.skill3 === undefined && obj.number3 !== undefined) ||
      (obj.skill3 !== undefined && obj.number3 === undefined) ||
      (obj.skill4 === undefined && obj.number4 !== undefined) ||
      (obj.skill4 !== undefined && obj.number4 === undefined) ||
      (obj.skill5 === undefined && obj.number5 !== undefined) ||
      (obj.skill5 !== undefined && obj.number5 === undefined))
  ) {
    h6.textContent = "* Enter all details carefully";
    h6.classList.add("validation");
    skill.insertAdjacentElement("afterend", h6);
    isValid = false;
  }
  if (
    isValid &&
    (obj.number1 < 0 ||
      obj.number2 < 0 ||
      obj.number3 < 0 ||
      obj.number4 < 0 ||
      obj.number5 < 0 ||
      obj.number1 > 100 ||
      obj.number2 > 100 ||
      obj.number3 > 100 ||
      obj.number4 > 100 ||
      obj.number5 > 100)
  ) {
    h6.textContent = "* Proficiency value is invalid";
    h6.classList.add("validation");
    proficiency.insertAdjacentElement("afterend", h6);
    isValid = false;
  }
  if (!isValid) {
    window.scrollTo(0, 0);
    return;
  }
  h6.remove();
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));

  modal.style.display = "none";
  overlay.classList.remove("modal-overlay");
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  window.location.reload();
});

btn1?.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.classList.add("modal-overlay");
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  window.scrollTo(0, 0);
});

cancel?.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  overlay.classList.remove("modal-overlay");
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
});

let prevLink = links[0];

switch (window.location.pathname) {
  case "/skills.html":
    prevLink = links[1];
    break;
  case "/index.html":
    prevLink = links[0];
    break;
}
switch (window.location.hash) {
  case "#projects":
    prevLink = links[3];
    break;
  case "#recommendations":
    prevLink = links[4];
    break;
  case "#contact":
    prevLink = links[5];
    break;
}
prevLink.classList.add("active");

links.forEach((link) => {
  link.addEventListener("click", () => {
    prevLink.classList.remove("active");
    prevLink = link;
    link.classList.add("active");
  });
});

if (skillCard)
  data.forEach((ele) => {
    skillCard.innerHTML += `<div class="card-skills">
    <div class="card-content-skills">
        <h3>${ele.domain}</h3>
        <div class="taglines">
            <div class="tagline">
                <div>${ele.skill1}</div>
                <div>${ele.number1}%</div>
            </div>
            <div class="line">
                <div class="line-width" style = "width: ${
                  ele.number1
                }%";)}></div>
            </div>
            ${
              ele.skill2
                ? `<div class="tagline">
                <div>${ele.skill2}</div>
                <div>${ele.number2}%</div>
            </div>
            <div class="line">
                <div class="line-width" style = "width: ${ele.number2}%";)}></div></div>`
                : ``
            }
            ${
              ele.skill3
                ? `<div class="tagline">
                    <div>${ele.skill3}</div>
                    <div>${ele.number3}%</div>
                </div>
                <div class="line">
                <div class="line-width" style = "width: ${ele.number3}%";)}></div></div>`
                : ``
            }
            ${
              ele.skill4
                ? `<div class="tagline">
                <div>${ele.skill4}</div>
                <div>${ele.number4}%</div>
            </div>
            <div class="line">
                <div class="line-width" style = "width: ${ele.number4}%";)}></div></div>`
                : ``
            }
            ${
              ele.skill5
                ? `<div class="tagline">
                <div>${ele.skill5}</div>
                <div>${ele.number5}%</div>
            </div>
            <div class="line">
                <div class="line-width" style = "width: ${ele.number5}%";)}></div></div>`
                : ``
            }
        </div>
    </div> 
</div>`;
  });

confirmBtn?.addEventListener("click", () => {
  contactModal.style.left = "-100%";
});
