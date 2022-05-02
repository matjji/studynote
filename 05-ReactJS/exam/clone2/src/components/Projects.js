import React from "react";
import styled from "styled-components"

import MainImg from "./MainImg"
import data from"../data"

const ProjectsBox = styled.div`
    margin-left: 15px;
    .project_img {
        padding: 0 8px;
        display: block;
    }
`

const Projects = () => {
    return (
    <ProjectsBox>
        <div className="project_img clear">
            {
                data.project.map((v, i) => {
                    return (
                        <MainImg key={i} src={v.img}>{v.subject}</MainImg>
                    )
                })
            }
        </div>
    </ProjectsBox>
    )
}

export default Projects;