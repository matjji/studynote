import React from "react";
import Helmet from "react-helmet";
import styled,{ createGlobalStyle} from "styled-components";

import Header from "./pages/Header"
import Content from "./pages/Content"
import Footer from "./pages/Footer"
const Global = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR';
  }
  body {
    padding: 0;
    margin: 0;
  }
`
const Main = styled.div`
  font-family: 'Noto Sans KR';
  padding: 0;
  margin: 0;
  .header {
    .jumbotron {
      padding: 80px;
      text-align: center;
      background: #1abc9c;
      color: white;
      
      h1 {
        font-size: 40px;
      }
    }
  }
  .navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;
    
    nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;

      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;

        &.right {
          margin-left: auto;
        }
        &:hover {
          background-color: #ddd;
          color: black;
        }
        &.isActive {
          background-color: #666;
          color: white;
        }
      }
    }
  }

  .content {
    max-width: 1200px;
    margin: auto;
    background-color: #eee;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    .side {
      width: 360px;
      flex: none;
      border-left: 1px solid #d5d5d5;
      border-right: 1px solid #d5d5d5;
    }

    .main {
      flex: 0 1 auto;
      background-color: white;
      border-right: 1px solid #d5d5d5;
    }

    .container {
      padding: 20px;
    }

    .fakeimg {
      background-color: #aaa;
      width: auto;
      padding: 20px;
      
    }
  }

  .footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
  }
`
function App() {
  return (
    <div>
      <Global/>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet"/>
      </Helmet>
      <Main>
        <Header />
        <Content />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
