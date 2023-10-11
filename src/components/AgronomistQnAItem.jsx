import { useState } from 'react'
import styles from './AgronomistQnAItem.module.css'
import { motion } from 'framer-motion'
function AgronomistQnAItem({ question  , farmer , qID }) 
{
    const [enteredAnswer , setAnswer] = useState('');
    function enterAnswerHandler(event) {
        setAnswer(event.target.value);
    }

    async function submitAnswer (e) 
    {
        console.log("Answer submitted");
        const agronomist = JSON.parse(localStorage.getItem('agronomist'));
        const newAnswer = {
            answer: enteredAnswer,
            questionID: qID,
            agronomist: agronomist
        };
        //                        ADD ANSWER
        try {
            const response = await fetch('http://localhost:5000/addanswer' , {
                method: 'POST' , 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(newAnswer)
            });
        } catch (error) {
            console.error('Error occurred during POSTING answer: ' , error);
        }
        //             UPDATE answerCount OF THE QUESTION
        try {
            const response = await fetch(`http://localhost:5000/updateanswercount/${qID}` , {
                method: 'PUT' 
            });

            if (response.ok) {
                console.log("answerCount Updated successfully");
            }
        } catch (error) {
            console.error('Error occurred during UPDATE: ' , error);
        }
    }
    return (
        <li>
            <br/>
            <p>
                <div className={styles.AgQuestionBox}>
                    <p className={styles.questionText}>{question}</p>
                    <p className={styles.farmerText}>{farmer}</p>
                </div>
            </p>
            <div className={styles.AgAnsContainer}>
                    <p className={styles.AgAnswer}><textarea onChange={enterAnswerHandler} className={styles.FixTextArea} placeholder="Write your answer..."></textarea> </p>
                    <p className={styles.AgSubmit}>
                    <motion.button className={styles.AgSubmitButton} onClick={submitAnswer}
                          whileHover={{scale: 1.2}}
                          whileTap={{scale: 0.9}}
                          transition={{duration: 0.5}}>
                          Submit
                    </motion.button>     
                    </p>
            </div>
        </li>
    )
}

export default AgronomistQnAItem