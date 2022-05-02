import React from "react";

import mySchool from "../mySchool"

const Student = () => {
    return (
        <div>
            <table border="1">
                <thead align="center">
                    <tr>
                        <th>학생번호</th>
                        <th>학생이름</th>
                        <th>아이디</th>
                        <th>학년</th>
                        <th>주민번호</th>
                        <th>생년월일</th>
                        <th>연락처</th>
                        <th>키</th>
                        <th>몸무게</th>
                        <th>소속학과번호</th>
                        <th>담당교수번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mySchool.student.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td key={index + "a"}>
                                        {item.id}
                                    </td>
                                    <td key={index + "b"}>
                                        {item.name}
                                    </td>
                                    <td key={index + "c"}>
                                        {item.userid}
                                    </td>
                                    <td key={index + "d"}>
                                        {item.grade}
                                    </td>
                                    <td key={index + "e"}>
                                        {item.idnum.substring(0,6) + "-" + item.idnum.substring(6,7) + "******"}
                                    </td>
                                    <td key={index + "f"}>
                                        {item.birthdate.substring(0,10)}
                                    </td>
                                    <td key={index + "g"}>
                                        {item.tel}
                                    </td>
                                    <td key={index + "h"}>
                                        {item.height}
                                    </td>
                                    <td key={index + "i"}>
                                        {item.weight}
                                    </td>
                                    <td key={index + "j"}>
                                        {item.deptno}
                                    </td>
                                    <td key={index + "k"}>
                                        {item.profno}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Student