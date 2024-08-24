import data from "./data.js";

const btn1 = document.querySelector(".add-skill-1");
const cancel = document.querySelector(".cancel");
const modal = document.querySelector(".add-skill-modal");
const links = document.querySelectorAll("nav ul a");
const parentEle = document.querySelector("nav").parentElement;
const skillCard = document.querySelector(".card-section-skills");
const form = document.querySelector(".add-skill-modal form");
const form1 = document.querySelector(".my-info form");
const domain = document.getElementById("domain");
const skill = document.getElementById("skill");
const proficiency = document.getElementById("proficiency");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("msg");

let h6 = document.createElement("h6");

form1?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form1);
  let obj = {};
  let isValid = true;
  formData.forEach((value, key) => {
    if (isValid && key === "Full Name" && value === "") {
      h6.textContent = "* Enter Full Name";
      h6.classList.add("validation1");
      fullname.insertAdjacentElement("afterend", h6);
      isValid = false;
    }
    if (isValid && key === "Email" && value === "") {
      h6.textContent = "* Enter Email";
      h6.classList.add("validation1");
      email.insertAdjacentElement("afterend", h6);
      isValid = false;
    }
    if (isValid && key === "Subject" && value === "") {
      h6.textContent = "* Enter Subject";
      h6.classList.add("validation1");
      subject.insertAdjacentElement("afterend", h6);
      isValid = false;
    }
    if (isValid && key === "Message" && value === "") {
      h6.textContent = "* Enter Message";
      h6.classList.add("validation1");
      message.insertAdjacentElement("afterend", h6);
      isValid = false;
    }
    if (isValid && value) {
      obj[key.trim()] = value.trim();
    }
  });
  if (!isValid) {
    window.scrollTo(2450, 2450);
    return;
  }
  h6.remove();
  console.log("Your Details :- ", obj);
});

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
  modal.parentElement.classList.remove("modal-overlay");
  window.location.reload();
});

btn1?.addEventListener("click", () => {
  modal.style.display = "block";
  modal.parentElement.classList.add("modal-overlay");
  window.scrollTo(0, 0);
});

cancel?.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  modal.parentElement.classList.remove("modal-overlay");
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
