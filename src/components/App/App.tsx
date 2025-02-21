import './App.css';

import { FC, useEffect, useState } from 'react';

import requestApi from '../../api/unsplashApi';

import toast from 'react-hot-toast';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import { Image } from './App.types';

const App: FC = () => {
  const [value, setValue] = useState<string | null>(null);
  const [isFirstPageLoaded, setIsFirstPageLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const [morePages, setMorePages] = useState<boolean>(true);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImgUrl, setModalImgUrl] = useState<string>('');
  const [modalImgAlt, setModalImgAlt] = useState<string>('');

  const inputValueProcessing = (inputValue: string): void => {
    setValue(inputValue);
    setImages([]);
    setPage(1);
    setIsFirstPageLoaded(false);
    setMorePages(true);
    setIsError(null);
  };

  const loadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (regularUrl: string, alt: string): void => {
    setModalIsOpen(true);
    setModalImgUrl(regularUrl);
    setModalImgAlt(alt);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!value) return;

    const fetchImages = async () => {
      setIsError(null);
      setLoader(true);

      try {
        const data = await requestApi(value, page);

        setImages(prevImages =>
          prevImages ? [...prevImages, ...data.results] : data.results
        );

        if (page === 1) {
          setIsFirstPageLoaded(true);
        }
        setMorePages(data.results.length === 12);
        if (data.total_pages === 0) {
          toast.error('Ooops! There are no matches with your request!', {
            position: 'bottom-center',
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message, {
            position: 'bottom-center',
          });
        } else {
          toast.error('Unknown error', {
            position: 'bottom-center',
          });
        }
      } finally {
        setLoader(false);
      }
    };

    fetchImages();
  }, [value, page]);

  return (
    <>
      <SearchBar onSubmit={inputValueProcessing} />
      {isError && <ErrorMessage onError={isError} />}
      <ImageGallery images={images} modalIsOpen={openModal} />
      {loader && <Loader />}
      {isFirstPageLoaded && !isError && morePages && !loader && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalUrl={modalImgUrl}
          modalAlt={modalImgAlt}
        />
      )}
    </>
  );
};

export default App;
