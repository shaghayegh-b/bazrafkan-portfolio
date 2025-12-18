import React from "react";

export default function ProjectCard({ project, featured }) {
  return (
    <div
      className={`bg-white rounded-xl shadow p-6 ${
        featured ? "grid md:grid-cols-2 gap-6" : ""
      }`}
    >
      <div>
        <h4 className="font-semibold text-lg">{project.title}</h4>
        {project.subtitle &&( <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>)}

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

        {/* Description */}
        <ul className="text-sm space-y-1 text-gray-700">
          {project.bullets.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
        {project.id == 2 && (
          <div className="bg-gray-100 rounded-lg h-48"></div>
        )}
        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <a href={project.mylink} className="box-shadow px-4 py-1.5 rounded bg-[#c94a4a] text-white text-sm">
             View Case Study
          </a>
          <a href={project.repository} className="box-shadow px-4 py-1.5 rounded bg-gray-200 text-sm">
            GitHub
          </a>
        </div>
      </div>

      {featured && <div className="bg-gray-100 rounded-lg h-48"></div>}
    </div>
  );
} 
