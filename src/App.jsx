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

function App() {
  const [enteredQuestion , setEnteredQuestion] = useState('');

    function enterQuestionHandler(event) {
        setEnteredQuestion(event.target.value);
    }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<LoginPage />}/>
      <Route path='/AccountCreation' element={<AccountCreationPage />} />   
      <Route path='/AgronomistLogin' element={<AgronomistLoginPage />} />
      <Route path='/AgronomistAccountCreation' element={<AgronomistAccountCreationPage />} />  
      <Route path='/FarmerHomepage' element={<FarmerHome enteredQuestion={enteredQuestion} enterQuestionHandler={enterQuestionHandler} />} />
      <Route path='/QuestionPage' element={<QuestionAnswerPage />} />
      <Route path='/AgronomistHomepage' element={<AgronomistHome />} />

      <Route path='/RelevantQuestions' element={<RelevantQuestionList enteredQuestion="Question 10" />} />

    </Routes>
  )
}

export default App;