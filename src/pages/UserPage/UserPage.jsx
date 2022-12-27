import React, { useState, useEffect, useCallback } from 'react'
import styles from './UserPage.module.scss'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-bootstrap-icons'
import { ChartApp, ListRepos } from '../../components';
import { LoaderApp } from '../../components/UI'
import axios from 'axios'
import { getLanguagesData } from '../../services/languagesData'

const UserPage = () => {
   const [userData, setUserData] = useState(null)
   const [reposData, setReposData] = useState(null)
   const [languages, setLanguages] = useState(null)
   const { username } = useParams()
   const navigation = useNavigate()

   const fetchData = useCallback(async() => {
      try{
         const resUserData = await axios.get(`https://api.github.com/users/${username}`);
         setUserData(resUserData.data)

         const resReposData = await axios.get(resUserData.data.repos_url)
         setReposData(resReposData.data.sort((a, b) => -a.pushed_at.localeCompare(b.pushed_at)))
         
         setLanguages(getLanguagesData(resReposData.data))
      }
      catch(err){
         navigation('/erroruser')
      }
   }, [username, navigation])


   useEffect(()=>{
      fetchData()
   }, [fetchData])


   if(userData === null) {
     return <LoaderApp/>
   }

   return (
      <div className={styles.user_page}>
         <nav className={styles.nav}>
            <Link to="/" className={styles.btn_link}> 
               <ArrowLeftCircle/>
               Назад
            </Link>
         </nav>
         <div className={styles.page_center}>
            <h1 className={styles.title}>
               Созданое резюме GitHub
            </h1>
            <div className={styles.table}>
               <div className={styles.table_title}>
                  <img className={styles.avatar} src={userData.avatar_url} alt="avatar" />
                  {userData.name}
               </div>
               <div className={styles.chart}><ChartApp list={languages}/></div>

               <div className={styles.th}>Username:</div>
               <div className={styles.td}>{userData.login}</div>

               <div className={styles.th}>Public repos:</div>
               <div className={styles.td}>{userData.public_repos}</div>

               <div className={styles.th}>Followers / Following:</div>
               <div className={styles.td}>{userData.followers} / {userData.following}</div>

               <div className={styles.th}>Created at:</div>
               <div className={styles.td}>{userData.created_at.split('T')[0]}</div>

               <div className={styles.th}>Location:</div>
               <div className={styles.td}>{userData.location}</div>
            </div>
            <ListRepos data={reposData}/>
         </div>
      </div>
   );
};
export default UserPage