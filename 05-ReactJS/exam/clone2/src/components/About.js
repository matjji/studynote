import React from "react";
import styled from "styled-components"
import data from "../data";
import AboutImg from "./AboutImg";

const AboutBox = styled.div`
    margin-left: 30px;

    & > p {
        font-size: 15px;
        font-weight: 400;
        padding-bottom: 32px;
    }

    .about_team {
        padding: 0px 8px;
    }
`

const About =() => {
    return(
        <AboutBox>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div className="about_team clear">
                {
                    data.about.member.map((v, i) => {
                        return(
                            <AboutImg key={i} img={v.img} name={v.name} position={v.position} desc={v.desc}/>
                        )
                    })
                }
            </div>
        </AboutBox>
    )
}

export default About;