import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './routes/Home'
import LoginPage from './routes/LoginPage'
import AccountCreationPage  from './routes/AccountCreationPage'
import FarmerHome from './routes/FarmerHome'
import QuestionAnswerPage from './routes/QuestionAnswerPage'
import AgronomistHome from './routes/AgronomistHome'
import { useState } from 'react'

function App() {
  const [enteredQuestion , setEnteredQuestion] = useState('');
  const [user, setUser] = useState('');

  function askQuestionHandler(event) {
      setEnteredQuestion(event.target.value);
  }

  function setUserHandler(event) {
      setUser(event.target.value);
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<LoginPage setUser={setUserHandler} />}/>
      <Route path='/AccountCreation' element={<AccountCreationPage />} />     
      <Route path='/FarmerHomepage' element={<FarmerHome farmer={user} question={enteredQuestion} askQuestionHandler={askQuestionHandler} />} />
      <Route path='/QuestionPage' element={<QuestionAnswerPage farmer={user} question={enteredQuestion} />} />
      <Route path='/AgronomistHomepage' element={<AgronomistHome />} />
    </Routes>
  )
}

export default App;