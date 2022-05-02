import React from "react";
import {Routes, Route} from "react-router-dom"

import Department from "./pages/Department"
import Professor from "./pages/Professor"
import Student from "./pages/Student"
import Use from "./pages/Use";

function App() {
  return (
    <div>
      <h1>Exam03</h1>
      <nav>
        <a href="/department">학과목록</a>&nbsp;|&nbsp;
        <a href="/professor">교수목록</a>&nbsp;|&nbsp;
        <a href="/student">학생목록</a>
      </nav>
      <hr/>
        <Routes>
          <Route path="/department" element={<Department/>} />
          <Route path="/professor" element={<Professor/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/:value" element={<Use/>} />
        </Routes>
    </div>
  );
}

export default App;
