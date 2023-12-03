// import ToggleButton from "../components/ToggleButton"
import { useEffect, useState } from "react"
import styles from "./AgronomistAnswerEditList.module.css"
import { motion } from 'framer-motion'
import AgronomistAnswerEditItem from "./AgronomistAnswerEditItem";
import axios from "axios";
import BASE_URL from "../CONSTANT";
function AgronomistAnswerEditList(){

    const agronomist = JSON.parse(localStorage.getItem('agronomist'));
    const [questions , setQuestions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${BASE_URL}/agfetchansweredquestions/${agronomist}` , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    const questionData = response.data;
                    setQuestions(questionData.data);
                    console.log(questions);
                } else {
                    console.log ("Fetch Failed");
                }
            } catch (error) {
                console.log('Error occurred during search: ' , error);
            }
        }
        fetchData();
    }, [])
    if(questions.length > 0) {
        return (
            <>
                <br/>
                <h2 className={styles.HeadingOfEdit}>
                     Your Previously Answered Questions
                </h2>
                <div className={styles.EditContainer}>
                
                <ul>
                    {questions.map((item) => (
                        <AgronomistAnswerEditItem key={item._id} questionID={item._id} question={item.question} />
                    ))}
                   
                </ul>
    
                </div>   
             </>         
        )
    }
    else {
        return(
            <>
                <br/>
                <h2 className={styles.HeadingOfEdit}>
                        Your Previously Answered Questions
                </h2>
                <div className={styles.EditContainer}>
                
                    <h2>You have not answered any questions yet</h2>

                </div>   
            </>  
        )
    }
   
}

export default AgronomistAnswerEditList