import { useState, useEffect } from 'react';
import PrevQuestion from './PrevQuestion';
import styles from './PrevQuestionList.module.css';
import axios from 'axios';

function PrevQuestionList() {
  const [questions, setQuestions] = useState([]);
  const farmer = JSON.parse(localStorage.getItem('farmer'));
  const NID = JSON.parse(localStorage.getItem('NID'));


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/fetchquestions/${NID}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const questionData = response.data;
          //const questionData = JSON.parse(JSONData);
          setQuestions(questionData.data);
        } else {
          console.log('Fetch failed');
        }
      } catch (error) {
        console.log('Error occurred during search', error);
      }
    }

    fetchData();
  }, [NID]); // Include 'NID' in the dependency array to re-run the effect when it changes
  if(questions.length>0) {
    return (
      <>
        <div className={styles.prevquestion_container}>
          <p className={styles.prevquestion_header}> Previous Questions you have asked</p>
          <ul>
            {questions.map((item) => (
              <PrevQuestion key={item._id} questionID={item._id} question={item.question} />
            ))}
          </ul>
        </div>
      </>
    );
  }
  else{
    return (
      <>
          <div className={styles.prevquestion_container}>
            <p className={styles.prevquestion_header}> Previous Questions you have asked</p>
              <ul>
                  <PrevQuestion />
              </ul>
          </div>
      </>
    );
  }
}

export default PrevQuestionList;