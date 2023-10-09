import { useEffect, useState } from 'react'
import AgronomistQnAItem from './AgronomistQnAItem'
import styles from './AgronomistQnAList.module.css'
import axios from 'axios';

function AgronomistQnAList()
{   
    const [questions , setQuestions] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:5000/fetchquestions`, {
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
                <AgronomistQnAItem key={item._id} question={item.question} farmer={item.farmer} questionID={item._id} />
              ))}         
           </ul>
            
         </div>
          <li className={styles.AgProfile}>
                   
          </li>
        
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
          <li className={styles.AgProfile}>
                   
          </li>
        
        </>
      )
    }
}
    
export default AgronomistQnAList