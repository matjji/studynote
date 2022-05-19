import React from "react";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import {Routes, Route, Link} from "react-router-dom"
import MyPage from "./MyPage";
import Login from "./Login";

function App() {
  return (
    <div >
      <ul>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
      <hr/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/*" element={<Profiles/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
