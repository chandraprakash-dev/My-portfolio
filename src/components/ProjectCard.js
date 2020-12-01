import React from "react";

function ProjectCard(props) {
    return(
        <div className="project-card">
            <p>{props.values.name}</p>
            <a target='_blank' href={props.values.code}><i className="fas fa-laptop-code"></i></a>
            <a target='_blank' href={props.values.live}><i className="fab fa-safari"></i></a>
        </div>
    )
}

export default ProjectCard;