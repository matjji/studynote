import React from "react";

import { useParams } from "react-router-dom";

const Weather = () => {
    // 기존의 콘솔 출력 내용 삭제함.
    console.clear();

    const weather = useParams();

    const weatherList = {
        "mon": ["맑음", "맑음"],
        "tue": ["비", "맑음"],
        "wed": ["맑음", "흐림"],
        "thu": ["맑음", "흐림"],
        "fri": ["흐림", "흐림"],
        "sat": ["비", "맑음"],
        "sun": ["맑음", "맑음"]
    };

    const date = weather.date

    // 조회결과가 저장될 객체
    let weatherItem = null;

    for (let i in weatherList) {
        if (date == i) {
            weatherItem = weatherList[i]
        }
    }

    /** 조회 결과가 없는 경우 */
    if (!weatherItem) {
        return (<h2>존재하지 않는 데이터에 대한 요처입니다.</h2>)
    }
    return(
        <div>
            <h2>오전</h2>
            <div>{weatherItem[0]}</div>
            <h2>오후</h2>
            <div>{weatherItem[1]}</div>
        </div>
    )
}

export default Weather