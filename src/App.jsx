import "./App.css";

import { useEffect, useState } from "react";

import requestApi from "./api/unsplashApi";

import toast from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [value, setValue] = useState(null);
  const [isFirstPageLoaded, setIsFirstPageLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(null);
  const [morePages, setMorePages] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState("");
  const [modalImgAlt, setModalImgAlt] = useState("");

  const inputValueProcessing = (inputValue) => {
    setValue(inputValue);
    setImages([]);
    setPage(1);
    setIsFirstPageLoaded(false);
    setMorePages(true);
    setIsError(null);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (regularUrl, alt) => {
    setModalIsOpen(true);
    setModalImgUrl(regularUrl);
    setModalImgAlt(alt);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!value) return;

    const fetchImages = async () => {
      setIsError(null);
      setLoader(true);

      try {
        const data = await requestApi(value, page);

        setImages((prevImages) => [...prevImages, ...data.results]);

        if (page === 1) {
          setIsFirstPageLoaded(true);
        }
        setMorePages(data.results.length === 12);
        if (data.total_pages === 0) {
          toast.error("Ooops! There are no matches with your request!", {
            position: "bottom-center",
          });
        }
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };

    fetchImages();
  }, [value, page]);
  console.log(images);

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
}

export default App;
