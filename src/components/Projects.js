import React from "react";
import projects from '../projects.json';
import ProjectCard from "./ProjectCard";

function Projects() {
    const projectCards = projects.map(project => <ProjectCard
                                                    key={project.id}
                                                    values={project}
                                                    />);

    return(
        <div className="projects">
            {projectCards}
        </div>
    )
}

export default Projects;