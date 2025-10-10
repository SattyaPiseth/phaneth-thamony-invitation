// MasonryGallery.jsx
import MasonryImage from "./MasonryImage";

export function MasonryGallery({ images, onOpen }) {
  return (
    <section
      className="columns-2 gap-x-4 md:columns-4 content-visibility-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      {images.map((img, i) => (
        <MasonryImage
          key={img.src}
          data={img}
          index={i}
          onOpen={onOpen}
          eager={i < 5}   // only first 3 images are eager/high
        />
      ))}
    </section>
  );
}
