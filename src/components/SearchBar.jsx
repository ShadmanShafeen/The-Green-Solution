import styles from './SearchBar.module.css'
import { motion } from 'framer-motion'
import { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function SearchBar({ enteredQuestion , askQuestionHandler }) {
    const navigate = useNavigate();
    const [questionID , setQuestionID] = useState("");
    const NID = JSON.parse(localStorage.getItem('NID'));
    const handleAsk = async (e) => {
        e.preventDefault();
        console.log("Question Asked", e.target);
        
        const farmer = JSON.parse(localStorage.getItem('farmer'));
        const NID = JSON.parse(localStorage.getItem('NID'));
        const newQuestion = {
            question: enteredQuestion,
            farmer: farmer,
            NID: NID
        };
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
        
    };

    

    return (
        <>
            <div className={styles.search_container}>
                <input idname={styles.searchBar} type="text" placeholder="Ask a question..." 
                onChange={askQuestionHandler} /> 
                <Link>
                    <motion.button
                        className={styles.searchButton} 
                        type="Search"
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        onClick={handleAsk}
                    >Ask</motion.button>

                </Link>
            </div>
            <div className={styles.HorizontalButtons}>
                <p className={styles.SpacingButton}>           
                            <motion.button 
                            className={styles.Ibutton}
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            ><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" class="svg-icon"><g stroke-width="2" stroke-linecap="round" stroke="#fff" fill-rule="evenodd" clip-rule="evenodd"><path d="m4 9c0-1.10457.89543-2 2-2h2l.44721-.89443c.33879-.67757 1.03131-1.10557 1.78889-1.10557h3.5278c.7576 0 1.4501.428 1.7889 1.10557l.4472.89443h2c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-12c-1.10457 0-2-.8954-2-2z"></path><path d="m15 13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3z"></path></g></svg>
                            <span class="lable"></span></motion.button>
                </p>
                <p>          
                    <motion.button 
                    className={styles.mswitch}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    >  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16"> <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"></path> <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path> </svg>  </motion.button>                             
                </p>
            </div>
        
        </>
    )
}

export default SearchBar