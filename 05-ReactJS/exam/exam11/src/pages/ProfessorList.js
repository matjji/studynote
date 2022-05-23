import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';

import Spinner from '../components/Spinner';
import Table from "../components/Table";
const LinkContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
`;
const TopLink = styled(NavLink)`
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    background-color: #fff;
    color: #000;
    text-decoration: none;

    &:hover {
        background-color: #06f2;
    }
`

const ProfessorList = () => {
    // data를 담기위해 useState생성
    const [professor, setProfessor] = React.useState([]);
    // useAxios
    const [{data, loading, error}, refetch] = useAxios("http://localhost:3001/professor", {
        useCache: false
    })
    // data가 변하면 실행
    React.useEffect(() => {
        setProfessor(data)
    },[data])
    //삭제기능 구현 - 자체 캐시기능 방지, 삭제 버튼 이벤트에 의해 호출되어야 하므로 메뉴얼 실행 모드
    const [{ loading2 }, sendDelete] = useAxios({
        method: 'DELETE'
    }, {
        useCache: false,
        manual: true
    })
    // 삭제 버튼 클릭시 이벤트
    const onDeleteClick = (e) => {
        e.preventDefault();
        const current = e.target;

        const id = parseInt(current.dataset.id);
        const name = current.dataset.name;
        if (window.confirm(`정말 ${name} 교수의 정보를 삭제하시겠습니까?`)) {
            (async () => {
                let json = null;
                try {
                    const response = await sendDelete({
                        method:'DELETE',
                        url: `http://localhost:3001/professor/${id}`
                    })
                    json = response.data
                } catch(e) {
                    console.error(e)
                    window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
                }
                if(json !== null) {
                    setProfessor(professor => professor.filter((v, i) => v.id !== id));
                }
            })()
        }
    }
    return (
        <div>
           <Spinner visible={loading || loading2}/>

           <LinkContainer>
                <TopLink to="add">교수 등록하기</TopLink>
            </LinkContainer>
            {error ? (
                <div>
                    <h1>Oops~!!! {error.code} Error.</h1>
                    <hr/>
                    <p>{error.message}</p>
                </div>
            ) : (
            <Table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>직급</th>
                        <th>급여</th>
                        <th>입사일</th>
                        <th>보직수당</th>
                        <th>소속학과번호</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {professor&& professor.map((v, i) => {
                        let index = []
                        for (let x in v) {
                            index.push(x);
                        }
                        if (index.pop() === "id") {
                            return (
                                <tr key={v.id}>
                                    <td>{v.id}</td>
                                    {Object.keys(v).map((item, j) => {
                                        let value = v[item]
                                        if (item === "hiredate") {
                                            value = dayjs(value).format('YY/MM/DD')
                                        } else if (item === 'sal') {
                                            value = `${value}만원`
                                        } else if ( item === "comm" && v["comm"]){
                                            value = `${value}만원`
                                        } else if (item === "id") {
                                            return
                                        }
                                        return (
                                            <td key={`${v.id}${i}`}>
                                                {value}
                                            </td>
                                        )
                                    })}
                                    <td>
                                        <NavLink to={`edit/${v.id}`}>수정하기</NavLink>
                                    </td>
                                    <td>
                                        <a href="#!" data-id={v.id} data-name={v.name} onClick={onDeleteClick}>삭제하기</a>
                                    </td>
                                </tr>
                            )
                        } else {
                            return(
                                <tr key={v.id} align="center">
                                    {Object.keys(v).map((item, k) => {
                                        let value = v[item]
                                        if (item === "hiredate") {
                                            value = dayjs(value).format('YY/MM/DD')
                                        } else if (item === 'sal') {
                                            value = `${value}만원`
                                        } else if ( item === "comm" && v["comm"]){
                                            value = `${value}만원`
                                        }
                                        return (
                                            <td>{value}</td>
                                        )
                                    })}
                                    <td key={`${v.id}${v.id}`}>
                                        <NavLink to={`edit/${v.id}`}>수정하기</NavLink>
                                    </td>
                                    <td>
                                        <a href="#!" data-id={v.id} data-name={v.name} onClick={onDeleteClick}>삭제하기</a>
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </Table>
            )}    

        </div>
    );
};

export default React.memo(ProfessorList);