import React from "react";
import PropTypes from 'prop-types';

const GradeItem = ({이름, 학년, 성별, 국어, 영어, 수학, 과학, }) => {
    return (
        <tr>
            <td>
                {이름}
            </td>
            <td>
                {학년}
            </td>
            <td>
                {성별}
            </td>
            <td>
                {국어}
            </td>
            <td>
                {영어}
            </td>
            <td>
                {수학}
            </td>
            <td>
                {과학}
            </td>
            <td>
                {parseInt(국어 + 영어 + 수학 + 과학)}
            </td>
            <td>
                {parseInt((국어 + 영어 + 수학 + 과학) / 4)}
            </td>
        </tr>
    )
}
GradeItem.propTypes = {
    이름: PropTypes.string,
    학년: PropTypes.number,
    성별: PropTypes.string,
    국어: PropTypes.number,
    영어: PropTypes.number,
    수학: PropTypes.number,
    과학: PropTypes.number
}

GradeItem.defaultProps ={
    국어: 0,
    영어: 0,
    수학: 0,
    과학: 0
}

export default GradeItem;