
const getRandom = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
}

const getRandomGRB = () => {
   const red = getRandom(50, 200);
   const green = getRandom(50, 200);
   const blue = getRandom(50, 200);
   return `rgba(${red},${green},${blue})`
}

const getLanguagesData = (data) => {
   let languages = []
   for(let repos of data){
      let isArr = languages.find(item => item.status === repos.language)
      if(!isArr && repos.language !== null){
         languages.push({status: repos.language, value: 1, color: getRandomGRB()})
      }
      else if(repos.language !== null){
         languages = languages.map(item => {
            if(item.status === repos.language){
               return {...item, value: item.value+1}
            }
            return item;
         })
      }
   }
   return languages;
}

export { getLanguagesData }