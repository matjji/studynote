import React from "react";
import Building from "./components/Building";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Nav/>
      <Building/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;