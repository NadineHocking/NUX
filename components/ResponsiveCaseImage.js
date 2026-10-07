import Image from "next/image";

export default function ResponsiveCaseImage({
  desktopSrc,
  mobileSrc,
  alt,
  width = 2400,
  height = 1350,
  className = "case-image",
  sizes = "(max-width: 768px) 100vw, 1200px",
  priority = false,
}) {
  return (
    <picture>
      {mobileSrc && (
        <source
          media="(max-width: 768px)"
          srcSet={mobileSrc}
        />
      )}

      <Image
        src={desktopSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        priority={priority}
      />
    </picture>
  );
}