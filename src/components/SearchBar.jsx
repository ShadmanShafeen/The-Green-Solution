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
                <p>           
                            <motion.button 
                            className={styles.twoButtons1}
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            ></motion.button>
                </p>
                <p>          
                    <motion.button 
                    className={styles.twoButtons2}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    ></motion.button>                             
                </p>
            </div>
        
        </>
    )
}

export default SearchBar