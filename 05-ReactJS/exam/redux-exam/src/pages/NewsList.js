import React from 'react';
import Spinner from "../components/Spinner"
import NewsItem from "../components/NewsItem"
import styled from "styled-components"
import {useSelector, useDispatch} from "react-redux"
import { getList } from '../slice/newsListSlice';

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

const NewList = () => {
    //출력 결과가 복잡해지는 것을 방지
    React.useEffect(() => console.clear(), []);

    const {loading, data, error} = useSelector(state => state.newsList)

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getList())
    }, [dispatch])
    return (
        <div>
            <Spinner visible={loading}></Spinner>
            <h1>News List</h1>
            { error ? (
                <div>
                    <h1>Oops~!!! {error.code} Error.</h1>
                    <hr/>
                    <p>{error.message}</p>
                </div>
            ) : (
                <ListContainer>
                    {data && data.map((v, i) => <NewsItem key={i} item={v}/>)}
                </ListContainer>
            )}
        </div>
    );
};

export default NewList;