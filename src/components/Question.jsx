import styles from './Question.module.css'
import ToggleButton from "../components/ToggleButton"
import LogOutButton from "../components/LogOutButton" 
import { useEffect, useState } from 'react'
import axios from 'axios'

function Question() {
    const [question , setQuestion] = useState('');
    const [farmer , setFarmer] = useState('');
    const questionID = JSON.parse(localStorage.getItem('questionID'));
    // const farmer = JSON.parse(localStorage.getItem('farmer'));
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:5000/fetchquestion/${questionID}` , {
                headers: {
                    'Content-Type': 'application/json'
                }
                });
                if(response.status === 200) {
                    const questionData = response.data;
                    setQuestion(questionData.data.question);
                    setFarmer(questionData.data.farmer);
                }
                else {
                    console.log('Fetch failed');
                }
            } catch (error) {
                console.log('Error occurred during search' , error);
            }
        }
        fetchData();
    })
    
    return (
        <>
          <div className={styles.question_container}>
              <ul className={styles.question_elements}>
                  <li className={styles.question}><p>{question}</p></li>
                  <li className={styles.farmer}><h1>{farmer}</h1></li>                
              </ul>
          </div>
          <ToggleButton/>
          <LogOutButton/>
        </>

    )
}

export default Question