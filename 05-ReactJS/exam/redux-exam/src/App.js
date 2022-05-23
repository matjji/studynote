import React from "react";
import {Routes, Route} from "react-router-dom"

import MenuLink from "./components/MenuLink";
import NewsList from "./pages/NewsList";

function App() {
  return (
    <div>
      <h1>redux-exam</h1>
      <nav>
        <MenuLink to="/">NewsList</MenuLink>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<NewsList/>} />
      </Routes>
    </div>
  );
}

export default App;
