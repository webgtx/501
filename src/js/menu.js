const menuExitBtn = document.querySelector('.exit-button');
const menuPage = document.querySelector('.menu');

menuPage.style.transform = 'translate(-100vw, 0)';
menuExitBtn.addEventListener('click', () => {
  menuPage.style.transition = '.4s ease';
  menuPage.style.transform = 'translate(-100vw, 0)';
})

function opnMnu() {
  menuPage.style.transition = '.4s ease';
  menuPage.style.transform = 'translate(0, 0)';
}

