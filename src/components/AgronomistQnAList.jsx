import { useEffect, useState } from 'react'
import AgronomistQnAItem from './AgronomistQnAItem'
import styles from './AgronomistQnAList.module.css'
import axios from 'axios';
import {Link} from  'react-router-dom'
import { motion } from 'framer-motion'


function AgronomistQnAList()
{   
    const agronomist = JSON.parse(localStorage.getItem('agronomist'));
    const [questions , setQuestions] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:5000/agfetchquestions/${agronomist}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 200) {
            const questionData = response.data;

            setQuestions(questionData.data)
          } else {
            console.log('Fetch Failed');
          }
        } catch (error) {
          console.log('Error occurred during search :' , error);
        }
      }
      fetchData();
    })
    
    if(questions.length > 0) {
      return(
        <>
        <br/>
        <h2 className={styles.Heading}>
          Questions and your Answer
        </h2>
             
         <div className={styles.AgQnAContainer}>
           <ul>
              {questions.map((item) => (
                <AgronomistQnAItem key={item._id} question={item.question} farmer={item.farmer} qID={item._id} />
              ))}         
           </ul>
            
         </div>
         <div className={styles.AgProfile}>
              <li className={styles.AgProfileList}>Questions Answered</li> 
                  <li className={styles.AgprofileBox}></li>
              <li className={styles.AgProfileList}>Pending Question</li>
                  <li className={styles.AgprofileBox}></li>
                  <li className={styles.AgProfileList}>Edit Your Answers</li>
             <Link to='/AgronomistAnswerEditPage' className={styles.TextButton}>
                      <motion.li   whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}} className={styles.AgprofileBox}><p className={styles.AgprofileBoxButton}><b>Click Here</b></p>
                      </motion.li>
              </Link>
         
          </div>
        </>
      )
    }
    else {
      return (
        <>
        <br/>
        <h2 className={styles.Heading}>
          Questions and your Answer
        </h2>
             
         <div className={styles.AgQnAContainer}>
           <ul>
               <AgronomistQnAItem />             
           </ul>
            
         </div>
          <div className={styles.AgProfile}>
              <li className={styles.AgProfileList}>Question Answered</li> 
                  <li className={styles.AgprofileBox}></li>
              <li className={styles.AgProfileList}>Pending Question</li>
                  <li className={styles.AgprofileBox}></li>
              <li className={styles.AgProfileList}>Edit Your Answers</li>
              <Link to='/AgronomistAnswerEdit' className={styles.TextButton}>
                      <motion.li   whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}} className={styles.AgprofileBox}><p className={styles.AgprofileBoxButton}><b>Click Here</b></p>
                      </motion.li>
              </Link>
                 
          </div>
        </>
      )
    }
}
    
export default AgronomistQnAList