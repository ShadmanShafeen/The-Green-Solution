import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './routes/Home'
import LoginPage from './routes/LoginPage'
import AccountCreationPage  from './routes/AccountCreationPage'
import FarmerHome from './routes/FarmerHome'
import QuestionAnswerPage from './routes/QuestionAnswerPage'

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<LoginPage />}/>
      <Route path='/AccountCreation' element={<AccountCreationPage />} />     
      <Route path='/FarmerHomepage' element={<FarmerHome />} />
      <Route path='/QuestionPage' element={<QuestionAnswerPage />} />
    </Routes>
  )
}

export default App
