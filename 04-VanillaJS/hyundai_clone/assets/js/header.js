/**
 * @filename : header.js
 * @author : 신지섭 (pon0304616@gmail.com)
 * @description : 메뉴 이벤트처리
 */
/**필요한 부분 불러오기 */
const list = document.querySelector('#event')
const sub = document.querySelector('.menu_sub')
const search = document.querySelector('.search');
const langEvent = document.querySelector('#langEvent')

/**회사소개에 대한 이벤트 */
list.addEventListener('mouseover', e => {
    sub.style.maxHeight = 70 + 'px';
    //다른게 열려있다면 닫아주기
    search.style.maxHeight = null;
    langEvent.style.maxHeight = null;
})
document.querySelector('.close_btn').addEventListener('click', e => {
    sub.style.maxHeight = null
})
/**search에 대한 이벤트 */
document.querySelector('#search_event').addEventListener('click', e => {
    if (!search.style.maxHeight) {
        search.style.maxHeight = 240 + 'px';
        //다른게 열려있다면 닫아주기
        sub.style.maxHeight = null
        langEvent.style.maxHeight = null;
    } else {
        search.style.maxHeight = null;
    }
})

document.querySelector('.search_close_btn').addEventListener('click', e => {
    search.style.maxHeight = null;
})
/** langauge에 대한 이벤트 */
document.querySelector('#language').addEventListener('click', e => {
    if (!langEvent.style.maxHeight) {
        langEvent.style.maxHeight = 100 + 'px';
        //다른게 열려있다면 닫아주기
        sub.style.maxHeight = null
        search.style.maxHeight = null;
    } else {
        langEvent.style.maxHeight = null;
    }
})