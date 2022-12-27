import React from 'react'
import {Navigate, Routes, Route } from 'react-router-dom'
import {Home, UserPage, ErrorUser} from '../pages'

const RouterApp = () => {
   return (
      <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path='/:username' element={<UserPage/>}/>
         <Route path='/erroruser' element={<ErrorUser/>}/>
         <Route path="*" element={<Navigate to={'/'}/>} />
      </Routes>
   );
};
export default RouterApp