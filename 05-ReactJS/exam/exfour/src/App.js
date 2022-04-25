import React from "react";
import GradeItem from "./components/GradeItem";
import GradeData from "./GradeData";
function App() {
  console.clear();
  return (
    <div>
      <h1>성적표</h1>
      <hr/>
      <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>학년</th>
                <th>성별</th>
                <th>국어</th>
                <th>영어</th>
                <th>수학</th>
                <th>과학</th>
                <th>총점</th>
                <th>평균</th>
            </tr>
        </thead>
        <tbody>
          { 
            GradeData.map((v, i) => {
              return(
                <GradeItem 이름={v.이름} 학년={v.학년} 성별={v.성별} 국어={v.국어} 영어={v.영어} 수학={v.수학} 과학={v.과학} /> 
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
