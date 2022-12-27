import React from 'react'
import styles from './AlertApp.module.scss'
import { XLg } from 'react-bootstrap-icons'
import { ButtonApp } from '../'

const AlertApp = ({mess="Сообщение", setAlert}) => {
   const close = () => {
      setAlert(false)
   }

   return (
      <div className={styles.background} onClick={close}>
         <div className={styles.box} onClick={(e)=>e.stopPropagation()}>
            <div className={styles.btns}>
               <XLg onClick={close}/>
            </div>
            <h2>{mess}</h2>
            <ButtonApp onClick={close}>Ок</ButtonApp>
         </div>
      </div>
   );
};
export default AlertApp