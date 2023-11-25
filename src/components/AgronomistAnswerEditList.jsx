// import ToggleButton from "../components/ToggleButton"
import styles from "./AgronomistAnswerEditList.module.css"
import { motion } from 'framer-motion'
const AgronomistAnswerEditList = () => {
    
    
    
    return (
        <>
         
         {/* <ToggleButton/> */}
         <br/>
         <h2 className={styles.HeadingOfEdit}>
          Questions and your Answer
        </h2>
         <div className={styles.EditContainer}>
            
         
           <ul>
            
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
                    <p className={styles.PrevquestionText}></p>
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
                    <p className={styles.PrevAnswerText}></p>
                    <p className={styles.PrevAgText}></p>
                </motion.div>
            </div>
            <div className={styles.AgPrevAnsContainer}>
                    <p className={styles.AgPrevAnswer}>
                        <textarea
                            className={styles.FixTextAreaAnswer}
                            placeholder="Write your answer...">
                        </textarea> 
                    </p>
                    <p className={styles.AgEdit}>
                    <motion.button 
                        className={styles.AgEditButton}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.8}}
                        transition={{duration:0.5}}
                        // onClick={submitAnswer}
                        >
                        <p className={styles.edit_text}>Edit</p>

                    </motion.button>  
                    </p>
            </div>
        </li>
        </ul>
            
            </div>   
         </>
         
    )
}

export default AgronomistAnswerEditList