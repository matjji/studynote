/** 패키지 참조 */
import React from "react";
import {Routes, Route} from 'react-router-dom'
/** 컴포넌트 참조 */
import Nav from "./components/Nav";
import Img from "./components/Img";
import Main from "./pages/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Nav />
      <Img/>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
