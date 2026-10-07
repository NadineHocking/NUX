"use client";

import { useEffect, useState } from "react";
import ResponsiveCaseImage from "@/components/ResponsiveCaseImage";
import Button from "@/components/Button";

export default function ResponsiveFigma({
  iframeSrc,
  iframeTitle,
  mobileImage,
  mobileAlt,
  mobileLink,
  mobileButtonText = "View Figma prototype",
}) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();

    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  // Don't render either version until the viewport is known.
  if (isMobile === null) {
    return null;
  }

  // Mobile: static image + link
  if (isMobile) {
    return (
      <div className="figma-mobile">
        <div className="case-image-wrapper">
          <ResponsiveCaseImage
            mobileSrc={mobileImage}
            alt={mobileAlt}
          />
        </div>

        <div className="hero-actions">
          <Button
            href={mobileLink}
            icon="arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {mobileButtonText}
          </Button>
        </div>
      </div>
    );
  }

  // Desktop: Figma iframe
  return (
    <div className="figma-panel figma-desktop">
      <div className="prototype-header">
        <span>Desktop</span>
        <span>Figma prototype</span>
      </div>

      <div className="figma-embed">
        <iframe
          title={iframeTitle}
          src={iframeSrc}
          allowFullScreen
        />
      </div>
    </div>
  );
}