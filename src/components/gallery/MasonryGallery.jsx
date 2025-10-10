// MasonryGallery.jsx
import MasonryImage from "./MasonryImage";

export function MasonryGallery({ images, onOpen }) {
  return (
    <section
      className="grid grid-cols-1 gap-x-4 content-visibility-auto"
      style={{ contain: "layout style paint", containIntrinsicSize: "1px 1000px" }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {images.map((img, i) => (
        <MasonryImage
          key={img.src}
          data={img}
          index={i}
          onOpen={onOpen}
          eager={i < 3}   // only first 3 images are eager/high
        />
      ))}
    </section>
  );
}
