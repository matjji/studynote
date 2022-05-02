import React from "react";

import mySchool from "../mySchool"

const Department = () => {
    return (
        <div>
            <table width="300px" border="1">
                <thead>
                    <tr align="Center">
                        <th>학과번호</th>
                        <th>학과이름</th>
                        <th>위치</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mySchool.department.map((item, index) => {
                            return(
                                <tr key={index + "a"}>
                                    <td key={index}>{item.id}</td>
                                    <td key={index + "b"}>{item.dname}</td>
                                    <td key={index + "c"}>{item.loc}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Department