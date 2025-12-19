"use client";

import { useEffect, useRef } from "react";

type FigmaPrototypeEmbedProps = {
  url: string;
  height?: string;
};

export function FigmaPrototypeEmbed({ url, height = "600px" }: FigmaPrototypeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Convert prototype URL to embed format for better compatibility
  const encodedUrl = encodeURIComponent(url);
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodedUrl}`;

  useEffect(() => {
    // Set up interval to restart the prototype for looping effect
    // This will reload the iframe periodically to create a seamless looping effect
    const interval = setInterval(() => {
      if (iframeRef.current) {
        // Reload the iframe to restart the prototype from the beginning
        iframeRef.current.src = "";
        setTimeout(() => {
          if (iframeRef.current) {
            iframeRef.current.src = embedUrl;
          }
        }, 50);
      }
    }, 25000); // Restart every 25 seconds (adjust based on your prototype duration)

    return () => clearInterval(interval);
  }, [embedUrl]);

  return (
    <div className="w-full rounded-2xl border-0 overflow-hidden">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        className="w-full rounded-2xl border-0"
        allow="fullscreen"
        allowFullScreen
        title="Figma Prototype"
        style={{ minHeight: height, height: height }}
      />
    </div>
  );
}

