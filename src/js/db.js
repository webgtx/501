const dataBaseBlock = document.querySelector('.db');
const navLinks = document.querySelectorAll('.links');

navLinks.forEach(item => {
  item.addEventListener('click', (event) => {
    let attribute = event.target.getAttribute('href');
    attribute = attribute.split('');
    attribute.shift();
    dataBaseBlock.innerHTML = eval(attribute.join(''));
  })
})
