import React from 'react'
import styles from './ListRepos.module.scss'
const ListRepos = ({data}) => {

   if(data === null){
      return <h1>Loader...</h1>
   }
   else{
      data = data.slice(0, 10);
   }

   return (
      <React.Fragment>
         <h2>Последние репозитории:</h2>
         <ul className={styles.list}>
            {data.map((item, i) =>
               <li key={item.id}>
                  <a target="_blank" rel="noreferrer" href={item.html_url}>
                     <span>{`${i+1}.  ${item.name}`}</span>
                     <span className={styles.language}>{!!item.language?item.language:"не используется"}</span>
                  </a>
               </li>
            )}
         </ul>
      </React.Fragment>
   );
};
export default ListRepos