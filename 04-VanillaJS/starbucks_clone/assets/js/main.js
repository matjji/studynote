/**
 * @filename : main.js
 * @author : 신지섭 (pon0304616@gmail.com)
 * @description : 메인페이지 이벤트처리
 */

/**메인 이미지 보여주기 */
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

const detail = document.querySelectorAll('.detail > a')
detail.forEach((v,i) => {
    v.addEventListener('mouseover', e => {
        if (i == 0) {
            v.style.backgroundColor = '#d73a7a'
            v.style.color = 'white';
        } else if(i <4 || i > 6) {
            v.style.backgroundColor = 'black'
            v.style.color = 'white';
        } else if(i == 4){
            v.style.backgroundColor = '#1e245c'
            v.style.color = 'white';
        } else if(i == 5) {
            v.style.backgroundColor = '#b9813e'
            v.style.color = 'white';
        } else if (i == 6) {
            v.style.backgroundColor = "white"
            v.style.color = 'black'
        }
    })    
})
detail.forEach((v,i) => {
    v.addEventListener('mouseout', e => {
        v.style.backgroundColor = 'rgba(0,0,0,0)'
        if (i == 0) {
            v.style.color = '#d73a7a';
        } else if (i <4 || i > 6) {
            v.style.color = 'black';
        } else if (i == 4) {
            v.style.color = '#1e245c';
        } else if (i == 5) {
            v.style.color = '#b9813e';
        } else if (i == 6) {
            v.style.color = 'white'
        }
    })
})

/**공지사항 */
const length  = document.querySelectorAll('.content_text > ul > li').length;
const list = document.querySelectorAll('.content_text > ul > li')
let i = 0;
setInterval(() => {
    list.forEach((v, i) => {
        if (v.style.display == 'block'){
            v.style.display = 'none'
        }
    })
    if (list[i].style.display == 'block'){
        list[i].style.display = 'none'

    }else {
        list[i].style.display = 'block'
    }
    
    i++
    if (i > 4) {
        i = 0;
    }
}, 2000)

/**프로모션 위 아래 이미지 */
document.querySelector('.right_content > a').addEventListener('click', e => {
    e.preventDefault();
    const btn = document.querySelector('.right_content > a > p')
    if (btn.classList == 'up_img') {
        btn.classList = 'down_img'
    } else {
        btn.classList = 'up_img'
    }
})

/**스와이퍼 */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/**스와이퍼 열기 */
document.querySelector('.right_content > a').addEventListener('click', e=> {
    if (!document.querySelector('.slide').style.height) {
        document.querySelector('.slide').style.height = 658 + 'px';
    } else {
        document.querySelector('.slide').style.height = null;
    }
})

/**스크롤 이벤트 */
window.addEventListener('scroll', e => {
    const img1 =  document.querySelector('.bean_img1')
    const img2 = document.querySelector('.bean_img2')
    if (window.scrollY > 50 ){
        img1.style.left = 14.5997 + '%';
        img1.style.opacity = 1;
        img2.style.right = 17.4988 + '%';
        img2.style.opacity = 1;
    } else {
        img1.style.left = '-' + 43 + '%';
        img1.style.opacity = 0;
        img2.style.right = '-' + 43 + '%';
        img2.style.opacity = 0;
    }
    const coffee = document.querySelector('.inodesia_coffee');
    if (window.scrollY > 550) {
        coffee.style.opacity = 1;
    } else {
        coffee.style.opacity = 0;
    }
    const pick = document.querySelector('.pick_favorite');
    const text = document.querySelector('.pick_text');
    const detail = document.querySelector('.favorite_container > .detail > a')
    if (window.scrollY <= 1390) {
        pick.style.opacity = 0;
        pick.style.left = -60 + '%';
        text.style.opacity = 0;
        text.style.left = -60 + '%';
        detail.style.opacity = 0;
    } else if (window.scrollY >= 1400) {
        pick.style.opacity = 1;
        pick.style.left = 200 + 'px';
        text.style.opacity = 1;
        text.style.left = 92 + 'px';
        detail.style.opacity = 1;
    }
    const magazineImg = document.querySelector('.magazine_img');
    if (window.scrollY < 1550) {
        magazineImg.style.opacity = 0;
    } else {
        magazineImg.style.opacity = 1;
    }
    const storeImg1 = document.querySelector('.store_img1')
    const storeImg2 = document.querySelector('.store_img2')
    const storeImg3 = document.querySelector('.store_img3')
    const storeImg4 = document.querySelector('.store_img4')
    const storeText1 = document.querySelector('.store_text1')
    const storeText2 = document.querySelector('.store_text2')
    const storeDetail = document.querySelector('.store_container > .detail')
    if (window.scrollY < 2100) {
        storeText1.style.right = '-' + 43 + '%';
        storeText1.style.opacity = 0;
        storeText2.style.right = '-' + 43 + '%';
        storeText2.style.opacity = 0;
        storeDetail.style.right = '-' + 43 + '%';
        storeDetail.style.opacity = 0;

        storeImg1.style.opacity = 0;
        storeImg2.style.opacity = 0;
        storeImg3.style.opacity = 0;
        storeImg4.style.opacity = 0;
    } else {
        storeText1.style.right = 149 + 'px'
        storeText1.style.opacity = 1;
        storeText2.style.right = 168 + 'px'
        storeText2.style.opacity = 1;
        storeDetail.style.right = 402 + 'px'
        storeDetail.style.opacity = 1;

        storeImg1.style.opacity = 1;
        storeImg2.style.opacity = 1;
        storeImg3.style.opacity = 1;
        storeImg4.style.opacity = 1;
    }
})