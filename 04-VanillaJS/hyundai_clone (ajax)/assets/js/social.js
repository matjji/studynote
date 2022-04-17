(async () => {
    let json = null;

    try {
        json = await axios.get('assets/json/social.json')
    } catch(e) {
        console.error(e);
        alert('요청을 처리하는데 실패했습니다.')
    }

    if (json != null) {
        const {data} = json
        const social = data.social;
        
        const socialBox = document.querySelector('.social > .main_content');
        const mainBox = document.querySelector('.main_content');
        social.map((v, i) => {
            const div1 = document.createElement('div');
            div1.style.background = `url(${v.img}) no-repeat`
            div1.classList.add('social_img')
            div1.classList.add('left')

            const a1 = document.createElement('a');
            a1.setAttribute('href', v.url);

            const span1 = document.createElement('span');
            span1.innerHTML = v.text;
            
            const img1 = document.createElement('img');
            img1.setAttribute('src', `https://www.hyundai.com/etc/designs/hyundai/ww/ko/images/common/instagram.png`);

            span1.appendChild(img1)
            a1.appendChild(span1)
            div1.appendChild(a1)
            socialBox.appendChild(div1)
            
        })
    }
})();