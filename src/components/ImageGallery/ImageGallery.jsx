import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

function ImageGallery({ images, modalIsOpen }) {
  return (
    <section className={style.section}>
      <ul className={style.list}>
        {images.map((image) => {
          return (
            <li key={image.id} className={style.item}>
              <ImageCard
                urls={image.urls}
                alt={image.alt_description}
                modalIsOpen={modalIsOpen}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ImageGallery;
