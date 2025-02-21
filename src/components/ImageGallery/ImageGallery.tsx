import ImageCard from '../ImageCard/ImageCard';

import style from './ImageGallery.module.css';

import { Images } from '../../types';
import { FC } from 'react';

const ImageGallery: FC<Images> = ({ images, modalIsOpen }: Images) => {
  return (
    <section className={style.section}>
      <ul className={style.list}>
        {images.map(image => {
          return (
            <li key={image.id} className={style.item}>
              <ImageCard
                urls={image.urls}
                alt_description={image.alt_description}
                modalIsOpen={modalIsOpen}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ImageGallery;
