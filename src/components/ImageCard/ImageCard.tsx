import { FC } from 'react';
import style from './ImageCard.module.css';

import { ImageCardProps } from '../../types';

const ImageCard: FC<ImageCardProps> = ({
  urls,
  alt_description,
  modalIsOpen,
}: ImageCardProps) => {
  const regularUrl = urls.regular;
  return (
    <div>
      <img
        className={style.image}
        src={regularUrl}
        alt={alt_description}
        onClick={() => {
          modalIsOpen(regularUrl, alt_description);
        }}
      />
    </div>
  );
};

export default ImageCard;
