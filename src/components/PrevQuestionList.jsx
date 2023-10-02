import { useState, useEffect } from 'react';
import PrevQuestion from './PrevQuestion';
import styles from './PrevQuestionList.module.css';
import axios from 'axios';

function PrevQuestionList({ farmer , NID }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/fetchquestions?name=${farmer}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const questionData = response.data.question;
          setData(questionData);
          console.log(questionData);
          console.log(data);
        } else {
          console.log('Fetch failed');
        }
      } catch (error) {
        console.log('Error occurred during search', error);
      }
    }

    fetchData();
  }, [farmer]); // Include 'farmer' in the dependency array to re-run the effect when it changes
  if(data) {
    return (
      <>
        <div className={styles.prevquestion_container}>
          <p className={styles.prevquestion_header}> Previous Questions you have asked</p>
          <ul>
            {data.map((question, index) => (
              <PrevQuestion key={index} question={question} />
            ))}
          </ul>
        </div>
      </>
    );
  }
  else{
    return (
      <></>
    );
  }
  
}

export default PrevQuestionList;
