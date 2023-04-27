import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectsMapped = projects.map((entry)=>{
    console.log(entry)
    return <ProjectItem key={entry.id} name={entry.name} about={entry.about} technologies={entry.technologies}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
      /* render ProjectItem components here */
      projectsMapped
      }</div>
    </div>
  );
}

export default ProjectList;
