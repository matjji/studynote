import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const Student = ({deptno}) => {
    const [loading, setLoading] = React.useState(false);
    const [student, setStudent] = React.useState([]);
    React.useEffect(() => {
        if (deptno > -1) {
            // Ajax 로딩 시작을 알림
            setLoading(true);
        (async () => {
            try {
            const response = await
            axios.get('http://localhost:3001/student', {
                    params: {
                    deptno: deptno
                }
            });
            setStudent(student => response.data);
            } catch (e) {
                console.error(e);
                alert('Ajax 연동 실패');
            } finally {
                // Ajax 로딩 종료를 알림
                setLoading(false);
            }
        })();
        } else {
        setStudent([]);
        }
    }, [deptno]);
    return (
        <div>
            <Spinner visible={loading} />
            <h2>학생목록</h2>
            <table border="1" cellPadding="5">
            <thead>
            <tr>
            <th>학번</th>
            <th>이름</th>
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
            {student.map((v, i) => {
            return (
                <tr key={v.id} align="center">
                {Object.keys(v).map((w, j) => {
                    let value = v[w];
                if (w === 'idnum') {
                    value = value.substring(0, 6) + "-*******";
                } else if (w === 'birthdate') {
                    value = dayjs(value).format('YYYYMM-DD');
                }
                    return (<td key={`${v.id}_${j}`}>{value}</td>);
                })}
                </tr>
                );
                })}
            </tbody>
            </table>
        </div>
    );
};

/** 기본값 정의 */
Student.defaultProps = {
    deptno: -1
};
/** 데이터 타입 설정 */
Student.propTypes = {
    deptno: PropTypes.number.isRequired,
};
export default React.memo(Student);