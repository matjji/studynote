import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';
import styled from 'styled-components';
import dayjs from 'dayjs';


const Form = styled.form`
    position: sticky;
    display: flex;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;
    margin-bottom: 20px;

`

const Top = memo(() => {
    const navigate = useNavigate();
    /**
    const qs = useQueryString();
    console.log(qs);
    const query = qs.query;
    /*/
    const {date_gte} = useQueryString();
    const {date_lte} = useQueryString();
    /**/

    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        navigate(`confirmed?date_gte=${e.target.gte.value}&date_lte=${e.target.lte.value}`);
    }, [navigate]);
    return (
        <div>
            <h1>Covid 19 현황</h1>
            <hr/>
            <Form onSubmit={onSearchSubmit}>
                <input type='date' name='gte' defaultValue={date_gte}/>
                ~
                <input type='date' name='lte' defaultValue={date_lte ? date_lte : dayjs().format("YYYY-MM-DD")}/>
                <button type='submit'>검색</button>
            </Form>

        </div>
    );
});

export default Top;