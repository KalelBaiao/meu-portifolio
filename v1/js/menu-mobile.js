const btnMobile = document.querySelector('.btn-mobile')
console.log(btnMobile)
btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('.Dnav')
    nav.classList.toggle('active')
})
