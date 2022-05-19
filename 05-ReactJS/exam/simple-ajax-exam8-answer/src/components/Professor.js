import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
const Professor = ({deptno}) => {
    const [loading, setLoading] = React.useState(false);
    const [professor, setProfessor] = React.useState([]);
    /** 페이지가 처음 열렸을 때와 검색어가 변경되었을 때 실행할 hook */
    React.useEffect(() => {
        if (deptno > -1) {
            // Ajax 로딩 시작을 알림
            setLoading(true);
            (async () => {
                try {
                    const response = await axios.get('http://localhost:3001/professor', {
                        params: {
                            deptno: deptno
                        }
                    });
                    setProfessor(professor => response.data);
                } catch (e) {
                    console.error(e);
                    alert('Ajax 연동 실패');
                } finally {
                    // Ajax 로딩 종료를 알림
                    setLoading(false);
                }
            })();
        } else {
            setProfessor([]);
        }
    },[deptno]);
    return (
        <div>
            <Spinner visible={loading} />
            <h2>교수목록</h2>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>교수번호</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>직급</th>
                        <th>급여</th>
                        <th>입사일</th>
                        <th>보직수당</th>
                        <th>소속학과번호</th>
                    </tr>
                </thead>
                <tbody>
                    {professor.map((v, i) => {
                        return (
                            <tr key={v.id} align="center">
                                {Object.keys(v).map((w, j) => {
                                    let value = v[w];

                                    if (w === 'hiredate') {
                                        value = dayjs(value).format('YYYY-MM-DD');
                                    }
                                    return (<td key={`${v.id}_${j}`}>{value}</td>)
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};
/** 기본값 정의 */
Professor.defaultProps = {
    deptno: -1
};
/** 데이터 타입 설정 */
Professor.propTypes = {
    deptno: PropTypes.number.isRequired,
};
export default React.memo(Professor);