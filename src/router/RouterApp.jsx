import React from 'react'
import {Navigate, Routes, Route } from 'react-router-dom'
import {Home, UserPage } from '../pages'

const RouterApp = () => {
   return (
      <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path='/erroruser' element={<Home error={true}/>}/>
         <Route path='/:username' element={<UserPage/>}/>
         <Route path="*" element={<Navigate to={'/'}/>} />
      </Routes>
   );
};
export default RouterApp