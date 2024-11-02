import style from "./ErrorMessage.module.css";

function ErrorMessage({ onError }) {
  return (
    <div className={style.error}>
      <p className={style.text}>
        Oops, something went wrong! {onError.message}
      </p>
      <img
        className={style.img}
        src="https://www.svgrepo.com/show/451518/computer-fail.svg"
        alt="Error image"
      />
    </div>
  );
}

export default ErrorMessage;
