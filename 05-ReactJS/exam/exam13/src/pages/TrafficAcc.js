import React, { memo } from 'react';
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slice/trafficAccSlice';

import Spinner from "../components/Spinner"
import Table from "../components/Table"
import ErrorView from '../components/ErrorView';
/** 드롭다운을 배치하기 위한 박스 */
const SelectContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;

    select {
        margin-right: 15px;
        font-size: 16px;
        padding: 5px 10px;
    }
`

const TrafficAcc = memo(() => {
    let totalAcc = 0;
    let totalDeath = 0;
    let totalInjury = 0;
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(state => state.trafficAcc)
    const [trafficData, setTrafficData] = React.useState();
    const [trafficMonth, setTrafficMonth] = React.useState();
    React.useEffect(() => {
        dispatch(getList({
            year: trafficData,
            month: trafficMonth
        }))
    }, [dispatch, trafficData, trafficMonth])
    const onChange = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target;
        const selectValue = current[current.selectedIndex].value
        setTrafficData(selectValue)
    },[setTrafficData])
    const onMonthChange = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target;
        const monthValue = current[current.selectedIndex].value
        setTrafficMonth(monthValue)
    }, [setTrafficMonth])
    return (
        <div>
            <Spinner visible={loading}/>
            <SelectContainer>
                <select name="year" onChange={onChange}>
                    <option value="">-- 년도 선택--</option>
                    {[...new Array(2018 - 2005 + 1)].map((v, i) => {
                        return (<option key={i} value={2005 + i}>{2005+i}년도</option>)
                    })}
                </select>
                <select name="month" onChange={onMonthChange}>
                    <option value="">-- 월 선택 --</option>
                    {[...new Array(12 - 1 + 1)].map((v,i) => {
                        return (<option key={i} value={1+i}>{1+i}월</option>)
                    })}
                </select>
            </SelectContainer>
            {error ? (<ErrorView error={error}/>) : (
                <Table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>년도</th>
                            <th>월</th>
                            <th>교통사고 건수</th>
                            <th>사망자 수</th>
                            <th>부상자 수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(({
                            id, year, month, accident, death, injury
                        }, i) => {
                            totalAcc += accident;
                            totalDeath += death;
                            totalInjury += injury
                            return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{year}년</td>
                                <td>{month}월</td>
                                <td>{accident.toLocaleString('ko-KR')}건</td>
                                <td>{death.toLocaleString('ko-KR')}명</td>
                                <td>{injury.toLocaleString('ko-KR')}명</td>
                            </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3">합계</th>
                            <th>{totalAcc.toLocaleString('ko-KR')}건</th>
                            <th>{totalDeath.toLocaleString('ko-KR')}명</th>
                            <th>{totalInjury.toLocaleString('ko-KR')}명</th>
                        </tr>
                    </tfoot>
                </Table>
            )}
        </div>
    );
});

export default TrafficAcc;