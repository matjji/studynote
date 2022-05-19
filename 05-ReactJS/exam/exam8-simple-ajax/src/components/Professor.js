import React from 'react';
import axios from "axios"

const Professor = (id) => {
    const [professor, setProfessor] = React.useState([]);
    React.useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`http://localhost:3001/professor?deptno=${id.props}`)
                setProfessor(data => response.data)
            } catch(e) {
                console.eroor(e)
                alert("서버 연결 실패")
            } 
        })()
    },[id.props])
    return (
        <tbody>
            {
                id.props > -1 &&
                professor.map((v, i) => {
                    return(
                        <tr align="center" key={i}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.userid}</td>
                            <td>{v.position}</td>
                            <td>{v.sal}</td>
                            <td>{v.hiredate.substring(0,10)}</td>
                            <td>{v.comm}</td>
                            <td>{v.deptno}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

export default React.memo(Professor);