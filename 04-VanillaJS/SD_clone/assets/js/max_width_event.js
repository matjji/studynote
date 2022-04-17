const clickMenu = () => {
    // 메뉴 클릭시 열리고, 클래스 추가.
    // 다시 누를시에 닫히고, 클래스 제거. 
    document.querySelectorAll('.list_box-item').forEach((v, i) => {
        v.addEventListener('click', e => {
            //현재 클릭되는 것
            const current = e.currentTarget;
            //리스트가 담긴 div 가져오기
            const sub = current.querySelector('.sub');
            // 클릭시 color_change 클래스 추가 제거
            current.classList.toggle('color_change')
            // 높이 없으면 높이 추가 있으면 제거
            if (!sub.style.maxHeight) {
                sub.style.maxHeight = sub.scrollHeight + "px";
            } else {
                sub.style.maxHeight = null
            }
        })
    })
}

// 햄버거 아이콘 클릭시 
document.querySelector('.icon_box').addEventListener('click', e => {
    //필요한 내용 가져오기
    const menuBox = document.querySelector('.menu_box');
    const btn = document.querySelector('.btn')
    const dimd = document.querySelector('.dimd');
    // 버튼 클릭시 active클래스 추가 제거
    btn.classList.toggle('active')

    if (!menuBox.style.maxWidth) {
        menuBox.style.maxWidth = 768 + 'px';
        menuBox.style.width = 768 + 'px';
        dimd.style.display = "block";
    } else {
        menuBox.style.maxWidth = null
        dimd.style.display = "none";
    }
})

//화면크기가 1260이 넘어가면 dimd, 메뉴 버튼 초기화
window.addEventListener('resize', e=> {
    const menuBox = document.querySelector('.menu_box');
    const dimd = document.querySelector('.dimd');
    const btn = document.querySelector('.btn')
    if (e.currentTarget.outerWidth > 1260) {
        dimd.style.display = "none";
        menuBox.style.maxWidth = null
        btn.classList.remove('active')
    } 
})