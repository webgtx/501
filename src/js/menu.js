const navLink = document.querySelector('.nav-link');
const hudElem = document.querySelectorAll('.hud__elem');
const menuExitBtn = document.querySelector('.exit-button');
const menuOpenBtn = document.querySelector('.intro__button');
const menuPage = document.querySelector('.menu');

let i = 0;
let hudBtns = [];
const navTabs = ['СОСТАВ', 'ПОСТАНОВЛЕНИЯ ', 'ПРАВИЛА ЛЕГИОНА', 'КАРТА', 'ИСТОРИЯЯ'];
hudElem.forEach(element => hudBtns.push(element));

// Animations
function fadeOut() {
  navLink.style.transition = '.5s ease'
  navLink.style.opacity = '0%';
  setTimeout(() => {
    navLink.style.opacity = '100%';
  }, 500);
}

// Hud
hudBtns[1].addEventListener('click', () => {
  i == navTabs.length - 1 ? null : i++
  setTimeout(() => {
    navLink.innerHTML = navTabs[i];
  }, 500);
  fadeOut();
})
hudBtns[0].addEventListener('click', () => {
  i == 0 ? null : i--;
  setTimeout(() => {
    navLink.innerHTML = navTabs[i];
  }, 500);
  fadeOut();
})
menuPage.style.transform = 'translate(-100vw, 0)';
menuExitBtn.addEventListener('click', () => {
  menuPage.style.transition = '.4s ease';
  menuPage.style.transform = 'translate(-100vw, 0)';
})
menuOpenBtn.addEventListener('click', () => {
  menuPage.style.transition = '.4s ease';
  menuPage.style.transform = 'translate(0, 0)';
})