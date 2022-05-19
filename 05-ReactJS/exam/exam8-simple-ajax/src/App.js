import React from "react";
import Professor from "./components/Professor";
import Student from "./components/Student";

function App() {
  const [selectValue, setSelectValue] = React.useState(-1)
  const onChange = React.useCallback((e) => {
    setSelectValue(e.target.value)
  },[])
  
  return (
    <div>
      <select onChange={onChange} value={selectValue}>
        <option value="">--- 학과선택 ---</option>
        <option value="101">컴퓨터공학과</option>
        <option value="102">멀티미디어학과</option>
        <option value="201">전자공학과</option>
        <option value="202">기계공학과</option>
      </select>
      <h1>학생목록</h1>
      <table border="1">
        <thead>
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
        </thead>
        <Student props={selectValue}/>
      </table>
      <h1>교수목록</h1>
      <table border="1">
        <thead>
          <th>교수번호</th>
          <th>이름</th>
          <th>아이디</th>
          <th>직급</th>
          <th>급여</th>
          <th>입사일</th>
          <th>보직수당</th>
          <th>소속학과번호</th>
        </thead>
        <Professor props={selectValue}/>
      </table>
    </div>
  );
}

export default App;
