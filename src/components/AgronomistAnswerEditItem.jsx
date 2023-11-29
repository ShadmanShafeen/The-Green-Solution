import { motion } from 'framer-motion'
import styles from './AgronomistAnswerEditItem.module.css'
import { useEffect, useState } from 'react'
import axios from "axios"
import { ToastContainer , toast , Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../CONSTANT'

function AgronomistAnswerEditItem({questionID , question}) {
    
    const agronomist = JSON.parse(localStorage.getItem('agronomist'));
    const [newAnswer , setNewAnswer] = useState('');
    const [previousAnswer , setPreviousAnswer] = useState('');
    const [answerID , setAnswerID] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${BASE_URL}/fetchanswer/${questionID}/${agronomist}` , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status === 200) {
                    const answerData = response.data;
                    setPreviousAnswer(answerData.data.answer);
                    setAnswerID(answerData.data._id);
                    console.log(answerID);
                }
                
            } catch (error) {
                console.log('Error occurred during search: ' , error);
            }
        }
        fetchData();
    },)

    async function updateAnswer() {
        console.log("New Answer Submitted");
        try {
            const response = await fetch(`http://localhost:5000/changeanswer/${answerID}` , {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({newanswer: newAnswer}) 
            });
            if (response.ok) {
                console.log('Answer updated successfully');
                setPreviousAnswer(newAnswer);
                toast.success('Answer Updated Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        } catch (error) {
            console.error('Error occurred during UPDATE: ' , error);
        }
    }

    function enterAnswerHandler(event) {
        setNewAnswer(event.target.value);
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <li className={styles.AgronomistEditQnAItem}>
                <p  className={styles.QuestionHeading}>
                <b> Question:</b> 
                </p>
                <div>
                    <motion.div 
                        className={styles.AgPrevQuestionBox}
                        whileHover={{scale:1.05}}    
                        transition={{duration:0.75}}
                    >
                        <p className={styles.PrevquestionText}>{question}</p>
                        <p className={styles.PrevfarmerText}></p>
                    </motion.div>
                </div>

                <p className={styles.AnswerHeading}><b>Previous Answer:</b></p>
                <div>
                    <motion.div 
                        className={styles.AgPrevAnswerBox}
                        whileHover={{scale:1.05}}    
                        transition={{duration:0.75}}
                    >
                        <p className={styles.PrevAnswerText}>{previousAnswer}</p>
                        <p className={styles.PrevAgText}></p>
                    </motion.div>
                </div>
                <div className={styles.AgPrevAnsContainer}>
                        <p className={styles.AgPrevAnswer}>
                            <textarea
                                className={styles.FixTextAreaAnswer}
                                placeholder="Change your answer..."
                                onChange={enterAnswerHandler}>
                            </textarea> 
                        </p>
                        <p className={styles.AgEdit}>
                        <motion.button 
                            className={styles.AgEditButton}
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.8}}
                            transition={{duration:0.5}}
                            onClick={updateAnswer}
                            >
                            <p className={styles.edit_text}>Update</p>
                        </motion.button>  
                        </p>
                </div>
            </li>
        </>
    )
}

export default AgronomistAnswerEditItem