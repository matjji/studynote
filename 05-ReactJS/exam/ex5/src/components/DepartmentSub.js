import React from "react";

const DepartmentSub = (props) => {
    console.log(props)
    return(
        <tr>
            <td >{props.id}</td>
            <td >{props.dname}</td>
            <td >{props.loc}</td>
        </tr>
    )
}
export default DepartmentSub