import styles from './AgronomistQnAItem.module.css'
import { motion } from 'framer-motion'
function AgronomistQnAItem({ question  , farmer , questionID }) 
{
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
                    <p className={styles.AgAnswer}><textarea className={styles.FixTextArea} placeholder="Write your answer..."></textarea> </p>
                    <p className={styles.AgSubmit}>
                    <motion.button className={styles.AgSubmitButton} onClick={null}
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