import { useEffect, useState } from 'react'
import AgronomistQnAItem from './AgronomistQnAItem'
import styles from './AgronomistQnAList.module.css'
import axios from 'axios';
import {Link} from  'react-router-dom'
import { motion } from 'framer-motion'
import BASE_URL from '../CONSTANT'


function AgronomistQnAList()
{   
    const agronomist = JSON.parse(localStorage.getItem('agronomist'));
    const answeredQuestionsNo = JSON.parse(localStorage.getItem('answeredQuestionsNo'));
    const [questions , setQuestions] = useState([]);
    //        unansweredQuestionsCount  &   answeredQuestionsNo
    let unansweredQuestionsCount;
    useEffect(() => {
      async function fetchData() {
        try {
            const response = await axios.get(`${BASE_URL}/agfetchquestions/${agronomist}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 200) {
            const questionData = response.data;
            setQuestions(questionData.data);
            
          } else {
            console.log('Fetch Failed');
          }
        } catch (error) {
          console.log('Error occurred during search :' , error);
        }
      }
      fetchData();
    })
    
    unansweredQuestionsCount = questions.length;
    console.log("Number of Unanswered Questions = " , unansweredQuestionsCount);

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
                  <li className={styles.AgprofileBox}><p className={styles.AnsQues}>{answeredQuestionsNo}</p></li>
              <li className={styles.AgProfileList}>Pending Question</li>
                  <li className={styles.AgprofileBox}><p className={styles.PendingQues}>{unansweredQuestionsCount}</p></li>
                  <li className={styles.AgProfileList}>Edit Your Answers</li>
             <Link to='/AgronomistAnswerEditPage' className={styles.TextButton}>
                      <motion.li 
                          whileHover={{scale: 1.1}}
                          whileTap={{scale: 0.9}}
                          transition={{duration:0.75}} 
                          className={styles.AgprofileBox}>
                        <p className={styles.AgprofileBoxButton}><b>Click Here</b></p>
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
                
                <p className={styles.NoEditAns}>No Pending Questions. Please Come Back Later!</p>
    
         </div>
          <div className={styles.AgProfile}>
              <li className={styles.AgProfileList}>Question Answered</li> 
                  <li className={styles.AgprofileBox}><p className={styles.AnsQues}>{answeredQuestionsNo}</p></li>
              <li className={styles.AgProfileList}>Pending Question</li>
                  <li className={styles.AgprofileBox}><p className={styles.PendingQues}> { unansweredQuestionsCount}</p></li>
              <li className={styles.AgProfileList}>Edit Your Answers</li>
              <Link to='/AgronomistAnswerEditPage' className={styles.TextButton}>
                      <motion.li   
                          whileHover={{scale: 1.1}}
                          whileTap={{scale: 0.9}} 
                          className={styles.AgprofileBox}>
                        <p className={styles.AgprofileBoxButton}><b>Click Here</b></p>
                      </motion.li>
              </Link>
                 
          </div>
        </>
      )
    }
}
    
export default AgronomistQnAList