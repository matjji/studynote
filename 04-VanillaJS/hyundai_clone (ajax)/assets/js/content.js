(async () => {
    //json 값을 받아올 변수 선언
    let json = null;

    try {
        json = await axios.get('assets/json/content.json');
    } catch(e) {
        console.error(e);
        alert('요청을 처리하데 실패했습니다.')
    }

    if (json != null) {
        let {data} = json;
        let content = data.content
        const main = document.querySelector('.main')

        const mainBox = document.createElement('div');
        mainBox.classList.add('main_content')
        mainBox.classList.add('clear')

        const mainContent = document.createElement('div');
        mainContent.classList.add('main_content-one')
        mainContent.classList.add('clear')
        
        content.map((v, i) => {
            //첫 번째, 두 번째 내용물이 다른것들과 다르기 때문에 하나하나 넣기
            if (i == 0) {
                const div2 = document.createElement('div');
                div2.classList.add('content_text')
                const h2 = document.createElement('h2');
                const span = document.createElement('span');
                const p1 = document.createElement('p');

                const div3 = document.createElement('div');
                div3.classList.add('left');
                const a1 = document.createElement('a');
                a1.setAttribute('href', v.url)
                a1.setAttribute('target', '_blank')
                const img = document.createElement('img');
                img.setAttribute('src', v.img_pc)
                a1.appendChild(img)
                div3.appendChild(a1);
                span.innerHTML = v.category;
                p1.innerHTML = v.subject;

                h2.appendChild(span);
                h2.appendChild(p1)
                div2.appendChild(h2);
                mainBox.appendChild(div2);
                mainBox.appendChild(div3)

                main.appendChild(mainBox);
            } else if (i == 1) {
                const div1 = document.createElement('div');
                div1.classList.add('content_img');
                div1.classList.add('right');
                const div2 = document.createElement('div');
                div2.classList.add('content_img_text')
                const p1 = document.createElement('p');
                p1.innerHTML = v.category
                const p2 = document.createElement('p');
                p2.innerHTML = v.subject;
                div2.appendChild(p1)
                div2.appendChild(p2)

                const a1 = document.createElement('a');
                a1.setAttribute('href', v.url);
                a1.setAttribute('target', '_blank');
                const img = document.createElement('img');
                img.setAttribute('src', v.img_pc);
                a1.appendChild(img)
                div1.appendChild(a1)
                div1.appendChild(div2)

                mainBox.appendChild(div1)
                main.appendChild(mainBox);
            } else {
                const aBox = document.createElement('div');
                aBox.classList.add('left')
                aBox.classList.add('abox')
                const a1 = document.createElement('a');
                a1.setAttribute('href', v.url);
                a1.setAttribute('target', '_blank');
                a1.classList.add('clear')
                const div2 = document.createElement('div');
                div2.classList.add('img')
                const img1 = document.createElement('img');
                img1.setAttribute('src', v.img_pc);
                div2.appendChild(img1)

                const div3 = document.createElement('div');
                div3.classList.add('text')
                if (v.width == 448) {
                    div3.classList.add('big')
                } else if (v.width == 352) {
                    div3.classList.add('normal')
                } else if (v.width == 256){
                    div3.classList.add('small');
                }
                const h2 = document.createElement('h2')
                const span1 = document.createElement('span');
                span1.innerHTML = v.category;
                const p1 = document.createElement('p')
                p1.innerHTML = v.subject;
                h2.appendChild(span1);
                h2.appendChild(p1);
                div3.appendChild(h2)

                a1.appendChild(div2);
                a1.appendChild(div3);
                aBox.appendChild(a1);
                mainContent.appendChild(aBox);
                main.appendChild(mainContent)
            }
            
        })
    }
})();
