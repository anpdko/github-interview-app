import React, {useState, useEffect} from 'react'
import { InputApp, ButtonApp, AlertApp } from '../../components/UI';
import styles from './Home.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({error = false}) => {
   const [input, setInput] = useState('')
   const [messError, setMessError] = useState(error)
   const navigation = useNavigate()

   const keyDown = (e) => {
      if(e.keyCode === 13 || e.keyCode === 32){
         navigation(`/${input}`)
      }
   }

   useEffect(() => {
      document.addEventListener('keydown', keyDown)
      return () => {
        document.removeEventListener('keydown', keyDown)
      }
   })

   return (
      <div className={styles.page_center}>
         <h1 className={styles.title}>Резюме GitHub</h1>
         <p className={styles.discription}>Тестовое задание для создания резюме, используя аккаунт GitHub</p>
         <InputApp 
            value={input} 
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Введите login пользователя GitHub...'
         />
         <Link to={`/${input}`}>
            <ButtonApp>Создать Резюме</ButtonApp> 
         </Link>
         {messError && <AlertApp mess="Такого пользователя не найдено!" setAlert={setMessError}/>}
      </div>
   );
};
export default Home