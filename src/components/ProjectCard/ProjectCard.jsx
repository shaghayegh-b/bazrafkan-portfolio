import React from "react";
import Fotros from "../../assets/imag/Fotros.jpg";
import yelena from "../../assets/imag/yelena.jpg";

export default function ProjectCard({ project, featured, setSelectedProject }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className={` ${featured ? "grid md:grid-cols-2 gap-6" : ""}`}>
        <div>
          <h4 className="font-semibold text-lg">{project.title}</h4>
          {project.subtitle && (
            <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>
          )}

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
 <div className="md:hidden">
          {project.id == 2 && (
            <div className="h-58 mt-2 overflow-hidden">
              <img
                src={yelena}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          )}
          {featured && (
            <div className="h-58 mt-2 flex items-center justify-center">
              <img
                src={Fotros}
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
          {/* Description */}
          <ul className={`text-sm space-y-1 text-gray-700 ${project.id == 2||featured?"pt-4 md:p-[unset]":""} `}>
  {(project.shortBullets || project.bullets).map((item, i) => (
    <li key={i}>• {item}</li>
  ))}
</ul>

        </div>
        <div className="hidden md:block ">
          {project.id == 2 && (
            <div className="h-58 mt-2 overflow-hidden">
              <img
                src={yelena}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          )}
          {featured && (
            <div className="h-58 mt-2 flex items-center justify-center">
              <img
                src={Fotros}
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3">
        {project.caseStudy && (
          <button
            onClick={() => setSelectedProject(project)}
            className="box-shadow px-4 py-1.5 rounded bg-[#c94a4a] text-white text-sm"
          >
            View Case Study
          </button>
        )}

        <a
          href={project.LinkRemote}
          target="_blank"
          rel="noopener noreferrer"
          className={`box-shadow px-4 py-1.5 rounded text-sm ${
            project.caseStudy ? "bg-gray-200" : "bg-[#c94a4a] text-white"
          }`}
        >
          Live Demo
        </a>

        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="box-shadow px-4 py-1.5 rounded bg-gray-100 text-sm"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
