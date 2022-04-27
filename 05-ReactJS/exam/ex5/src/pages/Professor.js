import React from "react";

import ProfessorSub from "../components/ProfessorSub";
import data from "../mySchool";
import style from "../assets/css/style.module.css"
const Professor = () => {
    return(
        <table className={style.table} border="1">
            <thead className={style.thead} align="center">
                <tr>
                    <th>교수번호</th>
                    <th>교수이름</th>
                    <th>아이디</th>
                    <th>직급</th>
                    <th>급여</th>
                    <th>입사일</th>
                    <th>보직수당</th>
                    <th>소속학과번호</th>
                </tr>
            </thead>
            <tbody className={style.tbody}>
                {
                    data.professor.map((v, i) => {
                        return (
                            <ProfessorSub key={i} id={v.id} name={v.name} userid={v.userid} position={v.position} sal={v.sal} hiredate={v.hiredate} comm={v.comm} deptno={v.deptno}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Professor;