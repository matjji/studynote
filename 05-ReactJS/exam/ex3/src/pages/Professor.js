import React from "react";

import mySchool from "../mySchool"

const Professor = () => {
    return (
        <div>
            <table border="1">
                <thead align="center">
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
                <tbody>
                    {
                        mySchool.professor.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td key={index + 'a'}>
                                        {item.id}
                                    </td>
                                    <td key={index + 'b'}>
                                        {item.name}
                                    </td>
                                    <td key={index + 'c'}>
                                        {item.userid}
                                    </td>
                                    <td key={index + 'd'}>
                                        {item.position}
                                    </td>
                                    <td key={index + 'e'}>
                                        {item.sal}
                                    </td>
                                    <td key={index + 'f'}>
                                        {item.hiredate.substring(0,10)}
                                    </td>
                                    <td key={index + 'g'}>
                                        {item.comm}
                                    </td>
                                    <td key={index + 'h'}>
                                        {item.deptno}
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

export default Professor