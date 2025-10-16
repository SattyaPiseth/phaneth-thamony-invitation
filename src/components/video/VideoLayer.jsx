// VideoLayer.jsx
export default function VideoLayer({ videoRef, poster, onEnded }) {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-[#ffe5ec]"
      aria-hidden="true"
    >
      {/* Visual fallback (works when Reduce Motion hides the video) */}
      <picture className="absolute inset-0 w-full h-full">
        {/* Prefer AVIF, then WebP, then JPEG/PNG */}
        <source srcSet="/images/cover-page/background.avif" type="image/avif" />
        <img
          id="lcp-poster"
          className="absolute inset-0 w-full h-full object-cover motion-reduce:block"
          src="/images/cover-page/background.jpg"
          alt=""
          aria-hidden="true"
          // Keep it visually under the video; the <video> comes later in DOM so it sits above.
        />
      </picture>

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover motion-safe:block motion-reduce:hidden select-none landscape:object-contain"
        autoPlay
        muted
        playsInline
        preload="metadata"
        // Avoid AVIF here; iOS poster rendering can be finicky with AVIF.
        poster={poster ?? "/images/cover-page/background.jpg"}
        onEnded={onEnded}
        tabIndex={-1}
        disablePictureInPicture
        aria-hidden="true"
      />
    </div>
  );
}
