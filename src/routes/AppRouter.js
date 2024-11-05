import React from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { LoginScreen } from '../components/login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';
// import { NotFound } from './NotFound';

export const AppRouter = () => {
  return (
   <BrowserRouter>
        <div>
        <Routes>
            <Route path='/login' element = {<LoginScreen/>}/>

            <Route path="/*" element={<DashboardRoutes />} />

        </Routes>
        </div>
        
   </BrowserRouter>
  )
}
