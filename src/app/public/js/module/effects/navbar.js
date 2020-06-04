const mobileButton = document.querySelector('.mobile');
const ulList = document.querySelector('nav ul');

mobileButton.addEventListener('click', ()=>{
    ulList.classList.toggle('activate');
})