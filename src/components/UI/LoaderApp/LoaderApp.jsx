import React from 'react'
import styles from './LoaderApp.module.scss'

const LoaderApp = () => {
   return (
      <div className={styles.box_loader}>
         <span className={styles.loader}></span>
      </div>
   );
};
export default LoaderApp