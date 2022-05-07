import React from "react";

function App() {
  const [rowNum, setRowNum] = React.useState(0);
  const myResult = React.useRef();
  const onChange = (e) => {
    setRowNum(e.currentTarget.value)
  }
  React.useEffect(() => {
    myResult.current.innerHTML = ""
    for (let i = 0; i < parseInt(rowNum); i++) {
      for (let j = 0; j < i+1; j++) {
        myResult.current.innerHTML +=  "*"
      }
      myResult.current.innerHTML += "<br/>"
    }
  },[rowNum])
  return (
    <div>
      <h1>Exam7</h1>
      <p>useStae, useEffet, useRef를 사용한 별찍기 구현</p>
      <div>
        <label htmlFor="rownum">rownum: </label>
        <input type="text" id="rownum" value={rowNum} onChange={onChange}/>
      </div>
      <hr/>
      <div style={{fontSize:'16px'}} ref={myResult}>
      </div>
    </div>
  );
}

export default App;
