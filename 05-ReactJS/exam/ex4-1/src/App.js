import React from "react";
import {Link, Routes, Route} from 'react-router-dom'

import Grade from "./pages/Grade";
import Meta from "./components/Meta";

function App() {
  return (
    <div>
      <Meta/>
      <h1>성적표</h1>
      <nav>
        <Link to="/grade/1">1학년</Link>&nbsp;|&nbsp; 
        <Link to="/grade/2">2학년</Link>&nbsp;|&nbsp;
        <Link to="/grade/3">3학년</Link>&nbsp;|&nbsp;
        <Link to="/grade/4">4학년</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path={`/grade/:level`} element={<Grade/>}/>
      </Routes>
    </div>
  );
}

export default App;