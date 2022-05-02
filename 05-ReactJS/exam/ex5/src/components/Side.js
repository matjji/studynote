import React from "react";

const Side = () => {
    return(
        <div className="side">
            <div className="container">
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div className="fakeimg" style={{height: "200px"}}>Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                <h3>More Text</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <div className="fakeimg" style={{height: "60px"}}>Image</div>
                <br />
                <div className="fakeimg" style={{height: "60px"}}>Image</div>
                <br />
                <div className="fakeimg" style={{height: "60px"}}>Image</div>
            </div>
        </div>
    )
}

export default Side;