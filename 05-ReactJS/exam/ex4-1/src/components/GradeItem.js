import React from "react";
import propTypes from "prop-types"

const GradeItem = (props) => {
    const sum = parseInt(props.국어 + props.영어 + props.수학 + props.과학)
    const avg = parseInt(sum / 4)
    return (
        <tr>
            <td>{props.이름}</td>
            <td>{props.성별}</td>
            <td>{props.국어}</td>
            <td>{props.영어}</td>
            <td>{props.수학}</td>
            <td>{props.과학}</td>
            <td>{sum}</td>
            <td>{avg}</td>
        </tr>
    )
}

GradeItem.propTypes = {
    이름: propTypes.string,
    성별: propTypes.string,
    국어: propTypes.number,
    영어: propTypes.number,
    수학: propTypes.number,
    과학: propTypes.number,
}

GradeItem.defaultProps = {
    국어: 0,
    영어: 0,
    수학: 0,
    과학: 0
}
export default GradeItem;