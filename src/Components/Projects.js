import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import Project from "./Project";

export default function Projects() {
  const [listProject, setListProject] = useState(projectsData);

  return (
    <section id="project" className="px-[10%]">
      <div className="">
        {listProject.map((projet) => (
          <Project projet={projet} key={projet.id} />
        ))}
      </div>
    </section>
  );
}
