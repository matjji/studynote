/** 기본 참조 패키지 */
import React from "react";
/** 이미지 참조 */
import tablesetting2 from "../img/tablesetting2.jpg"

const About = () => {
    return(
        <div className="main_about">
            <div className="main_img">
                <img src={tablesetting2} alt="Table Setting" style={{width:"600px", height:"750px"}} />
            </div>
            <div className="main_text up">
                <h1>About Catering</h1>
                <br />
                <h3>Tradition Since 1889</h3>
                <p>
                    The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
                    sit amet, consectetur adipiscing elit consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.We only use <span>seasonal</span> ingredients.
                </p>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum consectetur adipiscing
                    elit, sed do eiusmod temporincididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}

export default About;