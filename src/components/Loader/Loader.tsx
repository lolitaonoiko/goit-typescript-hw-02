import { Oval } from 'react-loader-spinner';

import style from './Loader.module.css';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className={style.loader}>
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
