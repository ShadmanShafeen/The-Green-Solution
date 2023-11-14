import axios from 'axios'
import Answer from './Answer'
import styles from './AnswerList.module.css'
import { useEffect, useState } from 'react';

function AnswerList () {
    const questionID = JSON.parse(localStorage.getItem('questionID'));
    const [answers , setAnswers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:5000/fetchanswers/${questionID}` , {
                    headers: {
                        'Content-Type': 'application/json',
                      }
                });
                if (response.status === 200) {
                    const answerData = response.data;

                    setAnswers(answerData.data);
                } else {
                    console.log('Fetch failed');
                }
            } catch (error) {
                console.log('Error occured during search' , error);
            }
        }
        fetchData();
    } , [questionID])
    
    
    if(answers.length > 0) {
        return (
            <div className={styles.all_answer_container}>
                <br/>
                <h2 className={styles.top_answers}>Top Answers</h2>
                <br/> <br/> 
                    <ul className={styles.answer_containers}>
                       {answers.map((item) => (
                            <Answer key={item._id} answer={item.answer} agronomist={item.agronomist} />
                       ))}
                    </ul>              
            </div>
        )
    }
    else {
        return (
            <div className={styles.all_answer_container}>
            <h2 className={styles.top_answers}>Top Answers</h2>
            <br /> <br />
            <p className={styles.top_answers}>Please wait for an Agronomist to answer</p>
        </div>
        )
    }
}

export default AnswerList