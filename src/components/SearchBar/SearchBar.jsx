import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.searchInfo.value.trim();
    if (!inputValue) {
      toast.error("Please write theme of searching!", {
        position: "bottom-center",
      });
    } else {
      onSubmit(inputValue);
    }
    form.reset();
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos.."
          name="searchInfo"
          className={style.inpt}
        />
        <button type="submit" className={style.btn}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}

export default SearchBar;
