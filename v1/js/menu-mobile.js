const btnMobile = document.querySelector('.btn-mobile')
const nav = document.querySelector('.Dnav')
// console.log(btnMobile)
btnMobile.addEventListener('click', () => {
    nav.classList.toggle('active')
})
function clickMenu(){
    nav.classList.remove('active')
}
