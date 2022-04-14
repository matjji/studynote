document.querySelector('.header_search > a').addEventListener('click', e => {
    const search = document.querySelector('.header_search');
    const ipnut = document.querySelector('.header_search > input');
    const rightMove = document.querySelector('.header_list');
    setTimeout(() => {ipnut.style.display = 'block'},200);
    search.style.width = 184 + 'px';
    rightMove.style.right = 230 + 'px'
})

document.querySelectorAll('.menu_box > ul > li').forEach((v, i) => {
    v.addEventListener('mouseover', e => {
        const inner = v.querySelector('.menu_inner')
        inner.style.maxHeight = 600 + 'px'
    })
})

document.querySelectorAll('.menu_box > ul > li').forEach((v, i) => {
    v.addEventListener('mouseout', e => {
        const inner = v.querySelector('.menu_inner')
        inner.style.maxHeight = 0;
    })
})