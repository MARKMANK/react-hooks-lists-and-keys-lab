import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologiesMapped = technologies.map((techItem)=>{
    return <span key={techItem}> {techItem} </span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
        {
        /* render a <span> for each technology in the technologies array */
        technologiesMapped
        }
      </div>
    </div>
  );
}

export default ProjectItem;
