import React from "react";

import {useLocation} from 'react-router-dom'
/**
 * HTTP GET 파라미터를 전달받는 페이지
 * 컴포넌트에게 전달되는 부가정보들은 props라는 이름의 파라미터에 모아서 전달된다. (JSON)
 */

const DepartmentGet = () => {
    //기존 콘솔 삭제
    console.clear();

    /** 요청 데이터 확인하기 */
    const location = useLocation();
    console.group("useLocation() 값 확인");
    console.log(location);
    console.groupEnd();

    //QueryString을 객체 형태로 변환
    const {search} = location;
    const query = new URLSearchParams(search);
    console.group("QueryString 확인");
    console.log(query);
    console.groupEnd();

    // 추출된 변수값과 데이터 타입 확인
    console.group("파라미터 처리 결과 확인")
    console.log('요청된 학과번호 값=%s (%s)', query.get('id'), typeof query.get('id'))
    console.log('요청된 메시지 내용=%s (%s)', query.get('msg'), typeof query.get('msg'))
    console.groupEnd();

    /** 한패이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비 */
    // --> 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야 한다. ==> Ajax
    const departmentList = {
        item: [
            { id: 101, dname: '컴퓨터공학과', loc: '1호관'},
            { id: 102, dname: '멀티미디어학과', loc: '2호관'}
        ]
    }

    /** 전달된 파라미터에 따라 화면에 출력할 내용 조회하기 */
    const id = parseInt(query.get('id'));

    // 조회결과가 저장될 객체
    let departmentItem = null;

    //미리 준비한 JSON에서 id값이 일치하는 정보를 조회
    departmentList.item.some((item, index) => {
        if (item.id === id) {
            departmentItem = item ;
            return true;
        }
        return false;
    })

    /** 조회 결과가 없는 경우 */
    if (!departmentItem) {
        return (<h2>존재하지 않는 데이터에 대한 요처입니다.</h2>)
    }
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.id}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    )
}

export default DepartmentGet