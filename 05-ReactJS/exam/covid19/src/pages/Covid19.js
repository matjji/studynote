import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid19 } from '../slices/Covid19Slice';
import { useQueryString } from '../hooks/useQueryString';
import { useParams } from 'react-router-dom';
//로딩바 컴포넌트
import Spinner from "../components/Spinner"
//에러정보를 표시하기 위한 컴포넌트
import ErrorView from "../components/ErrorView"
import MenuLink from '../components/MenuLink';
import dayjs from 'dayjs';
import LineChartView from '../components/LineChartView';

const Covid19 = memo(() => {
    const dispatch = useDispatch();
    //필드명 가져오기
    const {field} = useParams()
    // gte 값 가져오기
    const {date_gte} = useQueryString();
    // lte 값 가져오기
    const {date_lte} = useQueryString();
    // Covid19Slice에서 받아온 데이터, 로딩, 에러 가져오기
    const {data, loading, error} = useSelector(state => state.covidData)
    //useState를 통해 chartData 관리
    const [chartData, setChartData] = React.useState();
    React.useEffect(() => {
        dispatch(getCovid19({
            gte:date_gte,
            lte: dayjs(date_lte).add(+1, "d").format("YYYY-MM-DD") // 1일 전 값을 가져오므로 +1
        }))
    },[dispatch, date_gte, date_lte])
    React.useEffect(() => {
        if (data) {
            const newData = {
                date: [],
                fieldData: [] 
            }
            data.map((v,i) => {
                newData.date.push(dayjs(v.date).format("MM-DD"));
                // field에 따라 fieldData 에 넣는 값을 다르게 한다.
                if (field === "confirmed") {
                    newData.fieldData.push(v.confirmed)
                } else if (field === "confirmed_acc") {
                    newData.fieldData.push(v.confirmed_acc)
                } else if (field === "active") {
                    newData.fieldData.push(v.active)
                } else if (field === "released") {
                    newData.fieldData.push(v.released)
                } else if (field === "released_acc") {
                    newData.fieldData.push(v.released_acc)
                } else if (field === "death") {
                    newData.fieldData.push(v.death)
                } else if (field === "death_acc") {
                    newData.fieldData.push(v.death_acc)
                }
            })
            setChartData(newData)
        };
    },[field,data])
    return (
        <div>
            <Spinner visible={loading}/>
            {error ? (<ErrorView/>) : (
                <div>
                    <nav>
                        <MenuLink to={`/confirmed?date_gte=${date_gte}&date_lte=${date_lte}`}>일일확진자</MenuLink>
                        <MenuLink to={`/confirmed_acc?date_gte=${date_gte}&date_lte=${date_lte}`}>누적확진자</MenuLink>
                        <MenuLink to={`/active?date_gte=${date_gte}&date_lte=${date_lte}`}>격리환자</MenuLink>
                        <MenuLink to={`/released?date_gte=${date_gte}&date_lte=${date_lte}`}>격리해제</MenuLink>
                        <MenuLink to={`/released_acc?date_gte=${date_gte}&date_lte=${date_lte}`}>누적격리해제</MenuLink>
                        <MenuLink to={`/death?date_gte=${date_gte}&date_lte=${date_lte}`}>사망자</MenuLink>
                        <MenuLink to={`/death_acc?date_gte=${date_gte}&date_lte=${date_lte}`}>누적사망자</MenuLink>
                    </nav>
                    <LineChartView chartData={chartData}/>
                </div>
            )}
        </div>
    );
});

export default Covid19;