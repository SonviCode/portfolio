import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import Project from "./Project";

export default function Projects() {
  const [listProject, setListProject] = useState(projectsData);

  return (
    <section
      id="project"
      className="px-[10%] py-[200px] md:pt-20 overflow-hidden "
    >
      <div className="flex flex-col gap-52 max-w-7xl mx-auto">
        {listProject.map((projet) => (
          <Project projet={projet} key={projet.id} />
        ))}
      </div>
    </section>
  );
}
