import React from 'react'
import styles from './ButtonApp.module.scss'

const ButtonApp = ({children, className, ...props}) => {

   let padding = ""
   if(typeof(children) !== "string"){
      padding = "icon"
   }

   return (
      <button {...props} className={`
         ${styles.btn} 
         ${className} 
         ${styles[padding]}
      `}>
         {children}
      </button>
   );
};
export default ButtonApp