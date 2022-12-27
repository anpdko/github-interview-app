import React from 'react'
import styles from './UserPage.module.scss'
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-bootstrap-icons'
import { ChartApp } from '../../components';

const UserPage = () => {
   return (
      <div className={styles.user_page}>
         <nav className={styles.nav}>
            <Link to="/" className={styles.btn_link}> 
               <ArrowLeftCircle/>
               Назад
            </Link>
         </nav>
         <div className={styles.page_center}>
            <h1 className={styles.title}>Созданое резюме GitHub</h1>
            <div className={styles.table}>
               <div className={styles.table_title}>Прядко Андрей</div>
               <div className={styles.chart}><ChartApp/></div>

               <div className={styles.th}>Username:</div>
               <div className={styles.td}>anpdko</div>

               <div className={styles.th}>Количество репозиториев:</div>
               <div className={styles.td}>53</div>

               <div className={styles.th}>Дата регистрации:</div>
               <div className={styles.td}>12.22.2022</div>
            </div>

            <h2>Последние репозитории</h2>
            <ul className={styles.list}>
               <li>1. github-interview-app</li>
               <li>2. html_disciplines_mdpu</li>
               <li>3. library_book_mdpu_server</li>
               <li>4. github-interview-app</li>
               <li>5. html_disciplines_mdpu</li>
               <li>6. library_book_mdpu_server</li>
               <li>7. github-interview-app</li>
               <li>8. html_disciplines_mdpu</li>
               <li>9. library_book_mdpu_server</li>
               <li>10. library_book_mdpu_server</li>
            </ul>
         </div>
      </div>
   );
};
export default UserPage