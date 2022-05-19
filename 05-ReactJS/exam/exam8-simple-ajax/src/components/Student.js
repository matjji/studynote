import React from 'react';
import axios from "axios"
import Spinner from './Spinner';

const Student = (id) => {
    const [loading, setLoading] = React.useState(false);
    const [student, setStudent] = React.useState([]);
    React.useEffect(() => {
        (async() => {
            setLoading(true)
            try {
                const response = await axios.get(`http://localhost:3001/student?deptno=${id.props}`)
                setStudent(data => response.data)
            } catch(e) {
                console.eroor(e)
                alert("서버 연결 실패")
            } finally{
                setLoading(false)
            }
        })()
    },[id.props])
    return (
        <tbody>
            <Spinner visible={loading}/>
            {
                id.props > -1 &&
                student.map((v, i) => {
                    const date = new Date(v.birthdate)
                    const m = date.getMonth(v.birthdate)+1
                    const mm = m < 10 ? `0${m}` : m
                    const d = date.getDate(v.birthdate)
                    const dd = d < 10 ? `0${d}` : d
                    return(
                        <tr align="center" key={i}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.userid}</td>
                            <td>{v.grade}</td>
                            <td>{v.idnum.substring(0,6)}-*******</td>
                            <td>{date.getFullYear(v.birthdate)}-{mm}-{dd}</td>
                            <td>{v.tel}</td>
                            <td>{v.height}</td>
                            <td>{v.weight}</td>
                            <td>{v.deptno}</td>
                            <td>{v.profno}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

export default React.memo(Student);