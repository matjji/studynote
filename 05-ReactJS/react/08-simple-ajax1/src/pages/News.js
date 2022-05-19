/**
 * 05-stylesheet 단원의 '/components/NewsList.js'를 이단원의 /pages/News.js로 복사
 */
import React from 'react';
import styled from 'styled-components';
import axios from "axios"
import NewsItem from '../component/NewsItem';
import Spinner from '../component/Spinner';

const ListContainer = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;
`

const News = () => {
    //화면에 표시할 상태값(ajax 연동 결과로 받아올 json => 초기값을 빈 배열로 정의)
    const [newsList, setNewsList] = React.useState([]);
    //현재 ajax가 데이터를 로딩중인지를 의미하는 상태값;
    const [loading, setLoading] = React.useState(false);

    /**페이지가 처음 열렸을 때 실행할 hook */
    React.useEffect(() => {
        //Ajax 로딩 시작을 알림
        setLoading(true);
        setTimeout(() => {
            (async () => {
                //ajax 처리 결과가 저장될 변수
                let json = null;

                try {
                    const response = await axios.get('http://localhost:3001/news');
                    json = response.data;
                } catch(e) {
                    console.error(e)
                    alert('Ajax 연동 실패');
                } finally {
                    //Ajax 로딩 종료를 알림
                    setLoading(false);
                }

                if (json !== null) {
                    //일반 상태값 업데이트
                    //setNewsList(json)
                    //성능향상을 위한 함수형 업데이트 적용
                    setNewsList(newsList => json);
                }
            })();
        }, 500)
    }, []);
    return (
        <div>
            <Spinner visible={loading}/>
            <ListContainer>
                {newsList.map((v, i) => <NewsItem key={i} item={v}/>)}
            </ListContainer>
        </div>
    )
}

export default React.memo(News);