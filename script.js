document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.getElementById('navbar')
    const burgerMenu = document.getElementById('burgerMenu')

    resize()

    window.addEventListener('resize', () => {
        resize()
    })
    
    navbar.addEventListener('click', () => {
        showBurger()
    })

    function resize() {
        if(window.innerWidth < 520) {
            navbar.classList.add('mobile')
        } else {
            navbar.classList.remove('mobile')
        }
    }

    function showBurger() {
        if(!burgerMenu.classList.contains('active')) {
            burgerMenu.classList.add('active')
        } else {
            burgerMenu.classList.remove('active')
        }
    }
})