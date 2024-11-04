import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpenModal, getDataForModal }) {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <ImageCard
            key={image.id}
            image={image}
            onOpenModal={onOpenModal}
            getDataForModal={getDataForModal}
          />
        );
      })}
    </ul>
  );
}
