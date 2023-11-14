import { useEffect, useState } from 'react'
import styles from './RelevantQuestion.jsx'
import { Link } from 'react-router-dom';
import axios from 'axios';

function RelevantQuestion ({questionID , question}) {
    
    // const [questionID , setQuestionID] = useState('');
    function handleRelevantQuestionClick() {
        localStorage.setItem('questionID' , JSON.stringify(questionID));
    }
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/fetchquestion/${question}`, {
    //               headers: {
    //                 'Content-Type': 'application/json',
    //               },
    //             });
    //             if (response.status === 200) {
    //               const questionObject = response.data;
    //               //const questionData = JSON.parse(JSONData);
    //               console.log("Question IDDDDD")
    //               console.log(questionObject.data._id)
    //               setQuestionID(questionObject.data._id);
                  
    //             } else {
    //               console.log('Fetch failed');
    //             }
    //           } catch (error) {
    //             console.log('Error occurred during search: ', error);
    //           }
    //         }
    //         fetchData();
    //     },[]);

    return (
        <Link to='/QuestionPage' style={{textDecoration : 'none'}}>
          <li onClick={handleRelevantQuestionClick} className={styles.question_card}>
              <p className={styles.relevantquestion}>{question}</p>
              
          </li>
        </Link>
    )
}

export default RelevantQuestion