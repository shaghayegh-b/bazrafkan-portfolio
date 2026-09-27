import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function VideoPreview({ src, embedUrl, title, height = "16rem" }) {
  const { t } = useTranslation();
  const [missing, setMissing] = useState(false);

  if (embedUrl) {
    return (
      <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-black">
        <div style={{ height }}>
          <iframe
            src={embedUrl}
            title={title || "Project demo video"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0 block"
          />
        </div>
      </div>
    );
  }

  if (src && !missing) {
    return (
      <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-black">
        <video
          src={src}
          controls
          preload="metadata"
          style={{ height }}
          className="w-full block"
          onError={() => setMissing(true)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (missing) {
    return (
      <div
        style={{ height }}
        className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-400 text-center px-4"
      >
        {t("projectsSection.videoComingSoon")}
      </div>
    );
  }

  return null;
}
