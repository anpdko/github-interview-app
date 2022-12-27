import React from 'react'
import { InputApp, ButtonApp } from '../../components/UI';
import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <div className={styles.page_center}>
         <h1 className={styles.title}>Резюме GitHub</h1>
         <p className={styles.discription}>Тестовое задание для создания резюме, используя аккаунт GitHub</p>
         <InputApp placeholder='Введите имя пользователя GitHub'/>
         <Link to='/username'>
            <ButtonApp>Создать Резюме</ButtonApp> 
         </Link>
      </div>
   );
};
export default Home