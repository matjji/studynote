import React from "react";

import DepartmentSub from "../components/DepartmentSub";
import style from "../assets/css/style.module.css"
const Department = (props) => {
    return(
        <table className={style.table} border="1">
            <thead className={style.thead}>
                <tr align="Center">
                    <th>학과번호</th>
                    <th>학과이름</th>
                    <th>위치</th>
                </tr>
            </thead>
            <tbody className={style.tbody}>
                {
                    props.items.map((v, i) => {
                        return(
                            <DepartmentSub key={i} id={v.id} dname={v.dname} loc={v.loc} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Department;