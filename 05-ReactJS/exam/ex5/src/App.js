import React from "react";
import {Link, Routes, Route} from 'react-router-dom'

import data from "./mySchool";
import Department from "./pages/Department";
import Professor from "./pages/Professor";
import Student from "./pages/Student";

function App() {
  const style = {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#f066ff"
  }
  return (
    <div>
      <h1>Exam05</h1>
      <nav>
        <Link style={style} to="/department">학과목록</Link>&nbsp;|&nbsp;
        <Link style={style} to="/professor">교수목록</Link>&nbsp;|&nbsp;
        <Link style={style} to="/student">학생목록</Link>
      </nav>
      <hr/>
        <Routes>
          <Route path="/department" element={<Department items={data.department} />} />
          <Route path="/professor" element={<Professor items={data.professor}/>} />
          <Route path="/student" element={<Student items={data.student}/>} />
        </Routes>
    </div>
  );
}

export default App;
