const punch = document.querySelector('.img_punch');
const rollin = document.querySelector('.img_rollin');
const pomelo = document.querySelector('.img_pomelo');

setTimeout(() => {
    punch.style.opacity = 1;
}, 1000)

setTimeout(() => {
    rollin.style.opacity = 1;
}, 500)

setTimeout(() => {
    pomelo.style.opacity = 1;
}, 1500)
const detail = document.querySelector('.detail')
const detailA = document.querySelector('.detail > a')
detail.addEventListener('mouseover', e => {
    detail.style.backgroundColor = '#d73a7a'
    detailA.style.color = 'white';
})

detail.addEventListener('mouseout', e => {
    detail.style.backgroundColor = 'rgba(0,0,0,0)'
    detailA.style.color = '#d73a7a';
})