import { FC } from 'react';
import style from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../App/App.types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <section className={style.btnSection}>
      <button className={style.btn} onClick={onClick}>
        Load more..
      </button>
    </section>
  );
};

export default LoadMoreBtn;
