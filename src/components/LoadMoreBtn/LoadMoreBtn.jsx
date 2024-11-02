import style from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <section className={style.btnSection}>
      <button className={style.btn} onClick={onClick}>
        Load more..
      </button>
    </section>
  );
}

export default LoadMoreBtn;
