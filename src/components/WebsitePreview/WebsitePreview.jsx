import React, { useState } from "react";


export default function WebsitePreview({ url, title, height = "16rem", fallback = null }) {
  const [failed, setFailed] = useState(false);

  if (!url || failed) {
    return fallback;
  }

  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
      {/* Browser-like header */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[10px] text-gray-400">{displayUrl}</span>
      </div>

      {/* Fixed-height, self-contained scroll area */}
      <div style={{ height }} className="overflow-hidden overscroll-contain bg-white">
        <iframe
          src={url}
          title={title || displayUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          onError={() => setFailed(true)}
          className="h-full w-full border-0 block"
        />
      </div>
    </div>
  );
}
