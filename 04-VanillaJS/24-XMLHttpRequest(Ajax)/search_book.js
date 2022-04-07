/**
 * @filename : search_book.js
 * @author : 신지섭 (pon0304616@gmail.com)
 * @dexcription : 카카오API daum 검색을 통한 책 검색
 */

/** KAKAO REST KEY*/
const KAKAO_REST_KEY = "000004737ac8470934d8666dd2cdb286";

/** 페이지 번호*/
let currentPage = 1;

/** 검색어 */
let queryKeyword = null;

/** 마지막 페이지인지 검사 */
let isEnd = false;

// source 값
let sortSource = null;
let sizeSource = null;

// form에 submit 이벤트 처리 - 신규 검색
document.querySelector('#searchForm').addEventListener('submit', e => {
    //submit 이벤트 막기
    e.preventDefault();

    //정렬값 가져오기
    const sortField = document.querySelector('#sort-source');
    sortSource = sortField[sortField.selectedIndex].value;

    //문서수 값 가져오기
    const sizeField = document.querySelector('#size-source');
    sizeSource = sizeField[sizeField.selectedIndex].value;

    //검색어 가져오기
    const queryField = document.querySelector('#query');
    queryKeyword = queryField.value;

    //검색어 없을 경우
    if (!queryKeyword) {
        alert("검색어를 입력하세요.");
        return;
    }
    currentPage = 1;
    get_book_search();
})

// 스크롤 이벤트 처리
window.addEventListener('scroll', e => {
     // 마지막 페이지이거나 이미 로딩바가 화면에 표시되고 있다면 처리 중단
     if (isEnd || document.querySelector('#loading').classList.contains('active')){
        return;
    }

    //스크롤바의 Y좌표
    const scrollY = window.scrollY

    //웹 브라우저의 높이
    const windowHeight = window.screen.availHeight;

    //HTML문서 높이
    const documentHeight = document.body.scrollHeight;

    if (scrollY + windowHeight >= documentHeight) {
        currentPage++
        get_book_search();
    }
})

async function get_book_search() {
    //로딩바 객체
    const loading = document.querySelector('#loading');
    //로딩바 화면 표시
    loading.classList.add('active');
    // 검색 결과가 표시될 영역
    const list = document.querySelector('#list');

    //1페이지 요청이 있을경우 기존 검색결과 삭제
    if (currentPage == 1) {
        Array.from(list.getElementsByTagName('li')).forEach((v, i) => {
            list.removeChild(v);
        })
    }

    //받아올 값 변수
    let json = null;

    //try catch문 사용
    try {
        json = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
            params: {
                query: queryKeyword, //검색어
                sort: `${sortSource}`, //정렬
                page: currentPage, //현재페이지
                size: `${sizeSource}`, //화면 표시 문서 수
            },
            headers: {
                Authorization: `KakaoAK ${KAKAO_REST_KEY}`
            }
        })
        console.log(json)
    } catch(err) {
        console.error(err);
        alert('요청하신 처리를 실패했습니다')
    } finally {
        // 성공 실패와 상관없이 loading 제거
        loading.classList.remove('active');
    }

    if (json != null) {
        // json의 데이터 가져오기
        const {data} = json;
        //다음 페이지를 요청할 수 있는지 판단하기 위한 값
        isEnd = data.meta.is_end;
        data.documents.map((v, i) => {
            //내용을 담을 곳 불러오기
            const list = document.querySelector("#list");
            //li 태그 생성
            const li = document.createElement('li');
            //a 태그 생성
            const a = document.createElement("a");
            //setAttribute 을 통해 href 및 target 설정
            a.setAttribute('href', v.url);
            a.setAttribute('target', '_blank');
            //img 태그 생성
            const img = document.createElement('img');
            //setAttribute 을 통해 src 설정
            img.setAttribute('src', v.thumbnail || "img/noimage.jpg")
            //h2 태그 생성 및 내용 넣기
            const h2 = document.createElement('h2');
            h2.innerHTML =  v.title;
            //p 태그 생성 및 내용 넣기
            const p = document.createElement('p');
            //내용이 없을경우 "내용이 없습니다" 출력, 있으면 contents 출력
            p.innerHTML = v.contents == "" ? "내용이 없습니다." : v.contents;
            //span태그 생성, class 추가 및 내용 넣기
            const span1 = document.createElement('span');
            const span2 = document.createElement('span');
            const span3 = document.createElement('span');
            const span4 = document.createElement('span');
            span1.classList.add('rightbar')
            span1.innerHTML = v.authors
            span2.classList.add('rightbar')
            span2.innerHTML = v.publisher
            span3.classList.add('rightbar')
            span3.innerHTML = v.price
            span4.classList.add('rightbar')
            // sale_price가 -1로 출력되는 값을 기존가격과 똑같이 출력하기 
            span4.innerHTML = v.sale_price == -1 ? v.price : v.sale_price
            // appendChild를 통해 list에 추가하기
            a.appendChild(img);
            a.appendChild(h2);
            a.appendChild(p);
            a.appendChild(span1)
            a.appendChild(span2)
            a.appendChild(span3)
            a.appendChild(span4)
            li.appendChild(a);
            list.appendChild(li);
        })
    }
}