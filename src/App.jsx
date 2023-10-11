import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './routes/Home'
import LoginPage from './routes/LoginPage'
import AccountCreationPage  from './routes/AccountCreationPage'
import FarmerHome from './routes/FarmerHome'
import QuestionAnswerPage from './routes/QuestionAnswerPage'
import AgronomistHome from './routes/AgronomistHome'
import { useState } from 'react'
import AgronomistLoginPage from './routes/AgronomistLoginPage'
import AgronomistAccountCreationPage from './routes/AgronomistAccountCreationPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<LoginPage />}/>
      <Route path='/AccountCreation' element={<AccountCreationPage />} />   
      <Route path='/AgronomistLogin' element={<AgronomistLoginPage />} />
      <Route path='/AgronomistAccountCreation' element={<AgronomistAccountCreationPage />} />  
      <Route path='/FarmerHomepage' element={<FarmerHome />} />
      <Route path='/QuestionPage' element={<QuestionAnswerPage />} />
      <Route path='/AgronomistHomepage' element={<AgronomistHome />} />
    </Routes>
  )
}

export default App;