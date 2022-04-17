window.addEventListener('scroll', e => {
    const topBtn = document.querySelector('.top_btn')
    const scrollY = window.scrollY
    if (scrollY > 0) {
        topBtn.style.display = 'block'
    } else {
        topBtn.style.display = 'none';
    }
})
