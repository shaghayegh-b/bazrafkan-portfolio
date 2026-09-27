import React from "react";
import { useTranslation } from "react-i18next";
import Fotros from "../../assets/imag/Fotros.jpg";
import yelena from "../../assets/imag/yelena.jpg";
import WebsitePreview from "../WebsitePreview/WebsitePreview";
import VideoPreview from "../VideoPreview/VideoPreview";

export default function ProjectCard({
  project,
  featured,
  setSelectedProject,
  compact,
}) {
  const { t } = useTranslation();
  const staticImage =
    project.id === 1 ? Fotros : project.id === 2 ? yelena : null;
  const visual = project.previewUrl ? (
    <WebsitePreview
      url={project.previewUrl}
      title={project.title}
      height="16rem"
      fallback={
        staticImage ? (
          <div className="h-56 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={staticImage}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : null
      }
    />
  ) : project.videoUrl || project.videoEmbedUrl ? (
    <VideoPreview
      src={project.videoUrl}
      embedUrl={project.videoEmbedUrl}
      title={project.title}
      height="16rem"
    />
  ) : staticImage ? (
    <div className="h-56 flex items-center justify-center overflow-hidden">
      <img
        src={staticImage}
        alt=""
        className="max-w-full max-h-full object-contain"
      />
    </div>
  ) : null;

  return (
    <div
      className={`flex flex-col justify-around bg-white rounded-xl shadow p-6 ${
        compact ? "p-4 shadow-sm" : ""
      }`}
    >
      <div
        className={`flex flex-col justify-between gap-2 ${featured ? "grid md:grid-cols-2 gap-6" : ""}`}
      >
        <div>
          <h4 className={`font-semibold ${compact ? "text-base" : "text-lg"}`}>
            {project.title}
          </h4>
          {project.subtitle && (
            <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>
          )}

          {visual && !compact && <div className="mb-3 md:hidden">{visual}</div>}

          {/* Short description */}
          {project.description ? (
            <p
              className={`text-gray-700 ${compact ? "text-xs" : "text-sm"} ${
                visual ? "pt-1 md:p-[unset]" : ""
              }`}
            >
              {project.description}
            </p>
          ) : (
            <ul
              className={`text-sm space-y-1 text-gray-700 ${
                visual ? "pt-1 md:p-[unset]" : ""
              }`}
            >
              {(project.shortBullets || project.bullets).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          )}

          {/* Stack */}
          {project.stack?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {visual && !compact && <div className="hidden md:block">{visual}</div>}
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {project.caseStudy && (
          <button
            onClick={() => setSelectedProject(project)}
            className="box-shadow px-4 py-1.5 rounded bg-[#c94a4a] text-white text-sm"
          >
            {t("projectsSection.viewCaseStudy")}
          </button>
        )}

        {project.LinkRemote ? (
          <a
            href={project.LinkRemote}
            target="_blank"
            rel="noopener noreferrer"
            className={`box-shadow px-4 py-1.5 rounded text-sm ${
              project.caseStudy ? "bg-gray-200" : "bg-[#c94a4a] text-white"
            }`}
          >
            {project.linkLabel || t("projectsSection.liveDemo")}
          </a>
        ) : (
          <>
            {(project.videoUrl || project.videoEmbedUrl) && (
              <a
                href={project.videoUrl || project.videoEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`box-shadow px-4 py-1.5 rounded text-sm ${
                  project.caseStudy ? "bg-gray-200" : "bg-[#c94a4a] text-white"
                }`}
              >
                {t("projectsSection.watchVideo")}
              </a>
            )}
            <span className="px-4 py-1.5 rounded text-sm bg-gray-100 text-gray-500 border border-dashed border-gray-300">
              {t("projectsSection.localDemo")}
            </span>
          </>
        )}

        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="box-shadow px-4 py-1.5 rounded bg-gray-100 text-sm"
          >
            {t("projectsSection.github")}
          </a>
        )}
      </div>
    </div>
  );
}
