import React from "react";

import Weather from "./weather"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <h2>주간날씨</h2>
      <hr />
      <nav>
        <a href="/weather/mon">월</a>&nbsp;|&nbsp;
        <a href="/weather/tue">화</a>&nbsp;|&nbsp;
        <a href="/weather/wed">수</a>&nbsp;|&nbsp;
        <a href="/weather/thu">목</a>&nbsp;|&nbsp;
        <a href="/weather/fri">금</a>&nbsp;|&nbsp;
        <a href="/weather/sat">토</a>&nbsp;|&nbsp;
        <a href="/weather/sun">일</a>
      </nav>
      <Routes>
        <Route path="/weather/:date" element={<Weather/>}/>
      </Routes>
    </div>

  );
}

export default App;
