import styles from './SearchBar.module.css'
import { motion } from 'framer-motion'
import { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {
    
    const navigate = useNavigate();
    const [enteredQuestion, setEnteredQuestion] = useState('');
    const [questionID , setQuestionID] = useState("");
    const NID = JSON.parse(localStorage.getItem('NID'));
    const farmer = JSON.parse(localStorage.getItem('farmer'));

    const handleSpeechRecognition = () => {
        console.log("clicked");
    
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          const recognition = new SpeechRecognition();
          recognition.interimResults = false;
          recognition.lang = "bn-BD";
          recognition.maxAlternatives = 1;
    
          recognition.addEventListener('result', (e) => {
            console.log("result", e);
            const transcript = Array.from(e.results)
              .map(result => result[0])
              .map(result => result.transcript);
    
            console.log(transcript);
            setEnteredQuestion(transcript.join(' '));
          });
    
          recognition.start();
        } else {
          console.error("SpeechRecognition not supported");
        } 
      };

    const handleAsk = async (e) => {
        e.preventDefault();
        console.log("Question Asked", e.target);
        if(enteredQuestion === ''){
            console.log("No Question entered");
        } 
        else {
            const newQuestion = {
                question: enteredQuestion,
                farmer: farmer,
                NID: NID
            };

            //  Enter Question into Database
            try {
                const response = await fetch('http://localhost:5000/askquestion' , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newQuestion)
                });
                if (response.ok) {
                    console.log('Question asked successfully');
                }
                else {
                    console.error('Question asking failed');
                }
            } catch (error) {
                console.error('Error occurred during asking question:',error);
            }
    
            //  Fetch Last Question Inserted into Database
            async function fetchData() {
                    try {
                        const response = await axios.get(`http://localhost:5000/fetchquestionlast/${NID}` , {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                        });
                        if(response.status === 200) {
                            const fetchedData = response.data;
                            const questionID = fetchedData.data._id
                            setQuestionID(questionID);
                            localStorage.setItem('questionID',JSON.stringify(questionID));
                            navigate('/QuestionPage');
                        }
                        else {
                            console.log('Fetch failed');
                        }
                    } catch (error) {
                        console.log('Error occurred during search' , error);
                    }
                }
            fetchData();
        }
       
        
    };

    

    return (
        <>
            <div className={styles.search_container}>

            <input
            idname={styles.searchBar}
            value={enteredQuestion}
            type="text"
            placeholder="Ask a question..."
            onChange={(e)=> setEnteredQuestion(e.target.value)}
          />
                
                <Link>
                    <motion.button
                        className={styles.searchButton} 
                        type="Search"
                        whileHover={{scale: 1.2, border: "2px solid #0c0202"}}
                        whileTap={{scale: 0.9}}
                        onClick={handleAsk}>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" fill= "black"viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </motion.button>
                </Link>
                <p className={styles.AIText0}>Search</p>
            </div>
            <div className={styles.HorizontalButtons}>
                <p>          
                    <motion.button 
                        className={styles.mswitch}
                        onClick={handleSpeechRecognition}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}

                        onClick={handleSpeechRecognition}
                        ><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
                    </motion.button>                             

               <p className={styles.AIText2}>Speak Here</p>
                </p>
            </div>
        </>
    )
}

export default SearchBar