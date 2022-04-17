/**
 * @filename : header.js
 * @author : 신지섭 (pon0304616@gmail.com)
 * @description : 메뉴 이벤트처리
 */

 document.querySelectorAll('.list_box-item').forEach((v,i) => {
    const menuBack = document.querySelector('.menu_back');
    const dimd = document.querySelector('.dimd');
    //메뉴에 올렸을 때 maxHeight값이 없으면 값 추가
    v.addEventListener('mouseover', e => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        if (!sub.style.maxHeight) {
            sub.style.maxHeight = 300 + "px";
            sub.style.height = 240 + 'px'
            menuBack.style.display = 'block'
            dimd.style.display = "block";
        } else {
            sub.style.maxHeight = null
            menuBack.style.display = 'none' 
            dimd.style.display = "none";
        }
    })
    // 메뉴바에서 마우스가 벗어나면 모든 효과 무효
    v.addEventListener('mouseout', e => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        const menuBack = document.querySelector('.menu_back');
        const dimd = document.querySelector('.dimd');

        sub.style.maxHeight = null;
        menuBack.style.display = 'none';
        dimd.style.display = "none";
    })
})

//메뉴 밖 dimd 클릭시 메뉴 닫기
document.querySelector('.dimd').addEventListener('mouseover', e => {
    const menuBox = document.querySelector('.menu_box');
    const dimd = document.querySelector('.dimd');
    dimd.style.display = "none";
    menuBox.style.maxWidth = null
})

