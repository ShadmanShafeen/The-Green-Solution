import { useState } from 'react'
import styles from './AgronomistQnAItem.module.css'
import { motion } from 'framer-motion'
import BASE_URL from '../CONSTANT'
import { ToastContainer , toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (enteredAnswer !== '') {
            //                        ADD ANSWER
            try {
                const response = await fetch(`${BASE_URL}/addanswer` , {
                    method: 'POST' , 
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body:JSON.stringify(newAnswer)
                });
                if (response.status === 205) {
                    console.log('Answer added to Database and Updated Agronomist answeredQuestionsNo');
                }
                else {
                    console.log('Answer Post and Agronomist Update Failed');
                }
            } catch (error) {
                console.error('Error occurred during POSTING answer: ' , error);
            }
            //             UPDATE answerCount OF THE QUESTION
            try {
                const response = await fetch(`${BASE_URL}/updateanswercount/${qID}` , {
                    method: 'PUT' 
                });

                if (response.ok) {
                    console.log("answerCount Updated successfully");
                }
            } catch (error) {
                console.error('Error occurred during UPDATE: ' , error);
            }
        }
        else {
            toast.error('Please Enter An Answer Before Submitting' , {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}
            />
            <li>
            <p className={styles.QuestionHeading}><b>Question:</b></p>
              <p>  <motion.div 
                    className={styles.AgQuestionBox}
                    whileHover={{scale:1.05}}    
                    transition={{duration:0.75}}
                >
                    <p className={styles.questionText}>{question}</p>
                    <p className={styles.farmerText}>{farmer}</p>
                </motion.div>
            </p>
            <div className={styles.AgAnsContainer}>
               
                    <p className={styles.AgAnswer}>
                        <textarea
                            onChange={enterAnswerHandler} 
                            className={styles.FixTextArea}
                            placeholder="Write your answer...">
                        </textarea> 
                    </p>
                    <p className={styles.AgSubmit}>
                    <motion.button 
                        className={styles.AgButton}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.8}}
                        transition={{duration:0.5}}
                        onClick={submitAnswer}
                        >
                    <p className={styles.submit_text}>Submit</p>
                    </motion.button>  
                    </p>
            </div>
        </li>
        </>
    )
}

export default AgronomistQnAItem