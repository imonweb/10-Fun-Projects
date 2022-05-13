const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialLists = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
  socialLists.classList.toggle('hide');
  menuEl.classList.toggle('rotate');
})

// console.log(liEls);

liEls.forEach(liEl => {
  liEl.addEventListener("click", () => {
    menuTextEl.innerHTML  = liEl.innerHTML;
    socialLists.classList.add("hide")
  })
})