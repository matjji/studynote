/**
 * @filename : header.js
 * @author : 신지섭 (pon0304616@gmail.com)
 * @description : 메뉴 이벤트처리
 */

document.querySelector('.header_search > a').addEventListener('click', e => {
    const search = document.querySelector('.header_search');
    const input = document.querySelector('.header_search > input');
    const rightMove = document.querySelector('.header_list');
    setTimeout(() => {input.style.display = 'block'},200);
    search.style.width = 184 + 'px';
    rightMove.style.right = 230 + 'px'

    e.currentTarget.removeEventListener('click', e)
    e.currentTarget.addEventListener('click', e => {
        const input = document.querySelector('.header_search > input');
        if (!input.value) {
            alert('검색어를 입력하세요.')
        } else {
            console.log(input.value);
        }
    }, {once: true})
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