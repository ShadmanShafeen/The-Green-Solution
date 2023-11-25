import styles from './Answer.module.css'
import { motion } from 'framer-motion';
import { ToastContainer , toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Answer ({answerID , answer , agronomist , rating}) {
    
    const userID = JSON.parse(localStorage.getItem('userID'));
    async function handleUpvote() {
        try {
            const response = await fetch(`http://localhost:5000/rateanswer/${answerID}/${userID}/upvote` , {
                method : 'PUT'
            });
            if (response.status === 200) {
                console.log('Upvote Successful');
                toast.success('Rating Updated Successfully' , {
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
            else if (response.status === 201) {
                console.log('User has already upvoted this answer');
                toast.error('You have already upvoted this answer' , {
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
            else {
                console.log('Update Rating Failed with status ' + response.status);
            }
        } catch (error) {
            console.error('Answer Rating Failed');
        }
    }
    async function handleDownvote() {
        try {
            const response = await fetch(`http://localhost:5000/rateanswer/${answerID}/${userID}/downvote` , {
                method : 'PUT'
            });
            if (response.status === 200) {
                console.log('Downvote Successful');
                toast.success('Rating Updated Successfully' , {
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
            else if (response.status === 202) {
                console.log('User has already downvoted this answer');
                toast.error('You have already downvoted this answer' , {
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
            else {
                console.log('Update Rating Failed with status ' + response.status);
            }
        } catch (error) {
            console.error('Answer Rating Failed');
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
            <li className={styles.AllAnswerContainer}> 

                <li className={styles.answer_box}>
                        <p className={styles.answer}>{answer}</p>
                            
                        <p className={styles.agronomist}>- {agronomist}</p>  

                        <p className={styles.rating}>Rating: {rating}</p>
                </li>  
                    
                <li className={styles.RatingButton}>
                        
                    <li className={styles.Disgusting}>
                        <li>
                            <motion.button 
                                onClick={handleUpvote}
                                className={styles.Btn}  
                                whileHover={{scale:1.1 ,border: "2px solid #0c0202"}}
                                whileTap={{scale:0.85,border: "2px solid #0c0202"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="4.2em" width="4.2em"className={styles.arrow} viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
                            </motion.button>
                        </li>
                        <li className={styles.RatingText}> Useful </li>
                    </li> 
                            
                    <li className={styles.Disgusting}>
                        <li>
                            <motion.button 
                                onClick={handleDownvote}
                                className={styles.Btn1} 
                                whileHover={{scale:1.1 ,border: "2px solid #0c0202"}}
                                whileTap={{scale:0.85,border: "2px solid #0c0202"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow1} height="4.2em" width="4.2em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </motion.button>
                        </li>
                        <li  className={styles.RatingText}> Not Useful </li>
                    </li> 
                </li>
            </li>      
        </>    
    );
}

export default Answer;