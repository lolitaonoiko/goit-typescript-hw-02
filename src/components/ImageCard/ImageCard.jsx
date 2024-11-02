import style from "./ImageCard.module.css";

function ImageCard({ urls, alt_description, modalIsOpen }) {
  return (
    <div>
      <img
        className={style.image}
        src={urls.regular}
        alt={alt_description}
        onClick={() => {
          modalIsOpen(urls.regular, alt_description);
        }}
      />
    </div>
  );
}

export default ImageCard;
