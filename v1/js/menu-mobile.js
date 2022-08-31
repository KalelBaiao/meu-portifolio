const btnMobile = document.querySelector('.btn-mobile')
const nav = document.querySelector('.Dnav')
const menuMobile = document.querySelector('.menu-itens')
// console.log(btnMobile)
btnMobile.addEventListener('click', () => {
    nav.classList.toggle('active')
})
menuMobile.addEventListener('click', () => {
    nav.classList.remove('active')
})
