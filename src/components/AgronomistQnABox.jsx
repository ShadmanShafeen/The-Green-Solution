import styles from './AgronomistQnABox.module.css'
import { motion } from 'framer-motion'

function AgronomistQnABox()
{
     return(
        <>
        <br/>
        <h2 className={styles.Heading}>
          Questions and your Answer
        </h2>
             
         <div className={styles.AgQnAContainer}>
           <ul>
               <li>
                <br/>
                    <p>
                         <div className={styles.AgQuestionBox}>
                              
                         </div>
                    </p>
                      <div className={styles.AgAnsContainer}>
                      <p className={styles.AgAnswer}><textarea className={styles.FixTextArea} placeholder="Write your answer..."></textarea> </p>
                      <p className={styles.AgSubmit}>
                      <motion.button className={styles.SubmitButton} onClick={null}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}>
                        Submit
                      </motion.button>
                      </p>
                      </div>
              </li>    
          </ul>
          </div>
          <div className={styles.AgProfile}>
         <li className={styles.ProfileList}>Question Answered</li> 
              <li className={styles.AgprofileBox}></li>
          <li className={styles.ProfileList}>Pending Question</li>
              <li className={styles.AgprofileBox}></li>
          <li className={styles.ProfileList}>Days Active</li>
              <li className={styles.AgprofileBox}></li>
           </div>
        
        
        
        </>
     )
}
export default AgronomistQnABox