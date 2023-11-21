import { useEffect, useState } from 'react'

import styles from './RelevantQuestion.module.css'

import { Link } from 'react-router-dom';
import axios from 'axios';

function RelevantQuestion ({questionID , question}) {
    
    function handleRelevantQuestionClick() {
        localStorage.setItem('questionID' , JSON.stringify(questionID));
    }

    return (
        <Link to='/QuestionPage' style={{textDecoration : 'none'}}>
          <li onClick={handleRelevantQuestionClick} className={styles.question_card}>
              <p className={styles.relevantquestion}>{question}</p>
              
          </li>
        </Link>
    )
}

export default RelevantQuestion