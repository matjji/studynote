import React from 'react'
import axios from "axios"

import Spinner from "./components/Spinner";
import Professor from './components/Professor';
import Student from './components/Student';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [department, setDepartment] = React.useState([]);
  const [deptno, setDeptno] = React.useState(-1);

  React.useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/department')
        setDepartment(department=> response.data);
      } catch(e) {
        console.error(e);
        alert('Ajax 연동 실패');
      } finally {
        // Ajax 로딩 종료를 알림
        setLoading(false);
        }
      })();
  },[])
  /** 드롭다운의 선택 상태가 변경되었을 때 호출될 이벤트 핸들러 */
  const onSelectChanged = React.useCallback(e => {
  e.preventDefault();
  // 드롭다운의 선택 결과를 상태값으로 등록함
  const current = e.target;
  const id = parseInt(current[current.selectedIndex].value);
  setDeptno(id);
  }, []);
  return (
    <div>
      <Spinner visible={loading} />
      <h1>Exam 09</h1>
      <hr />
      <select onChange={onSelectChanged}>
      <option value="-1">--- 학과선택 ---</option>
      {department.map((v, i) => (<option key={v.id} value={v.id}>{v.dname}</option>))}
      </select>
      <Student deptno={deptno} />
      <Professor deptno={deptno} />
    </div>
  );
}

export default App;
