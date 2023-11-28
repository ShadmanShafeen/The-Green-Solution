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
import RelevantQuestionList from './components/RelevantQuestionList'
import AgronomistAnswerEdit from './components/AgronomistAnswerEdit'
import AboutUs from './components/AboutUs'
import HowItWorks from './components/HowItWorks'
import LoginPageAGS from './components/LoginPageAGS'
import CreateACC from './components/CreateACC'

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

      <Route path='/RelevantQuestions' element={<RelevantQuestionList enteredQuestion="Answer 01" />} />

      <Route path='/AgronomistAnswerEdit' element={<AgronomistAnswerEdit/>}/>
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/HowItWorks' element={<HowItWorks/>}/> 
      <Route path='/LoginPageAGS' element={<LoginPageAGS/>}/>
      <Route path='/CreateACC' element={<CreateACC/>}/>
    </Routes>
  )
}

export default App;