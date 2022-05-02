import React from "react";
import GradeItem from "../components/GradeItem";
import Meta from "../components/Meta";
import GradeData from "../GradeData"
import { useParams } from "react-router-dom";

const Grade = () => {
    const {level} = useParams()
    const key = `${level}학년`
    return(
        <table border="1">
            <Meta title={`${key} ::: React 연습문제`} />
            <thead>
                <tr>
                    <th>이름</th>
                    <th>성별</th>
                    <th>국어</th>
                    <th>영어</th>
                    <th>수학</th>
                    <th>과학</th>
                    <th>총점</th>
                    <th>평균</th>
                </tr>
            </thead>
            <tbody>
                {
                    GradeData[key].map((v, i) => {
                        return(
                            <GradeItem key={i} 이름={v.이름} 성별={v.성별} 국어={v.국어} 영어={v.영어} 수학={v.수학} 과학={v.과학} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Grade;