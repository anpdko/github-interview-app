import React from 'react'
import styles from './InputApp.module.scss'

const InputApp = ({...props}) => {
   return (
      <input className={styles.input} {...props} type="text"/>
   );
};
export default InputApp