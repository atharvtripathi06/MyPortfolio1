import Image from 'next/image';

/**
 * A full-bleed photographic layer for a section.
 * The veil keeps the light botanical palette intact so text and glass cards stay readable.
 */
export default function SectionBackdrop({ src, priority = false, className = '' }) {
  return (
    <div className={`section-bg ${className}`} aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        quality={70}
        className="section-bg-img"
      />
      <span className="section-bg-veil" />
    </div>
  );
}
