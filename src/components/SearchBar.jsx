import styles from './SearchBar.module.css'
import { motion } from 'framer-motion'

import { Link, useNavigate } from 'react-router-dom'

function SearchBar({ farmer, enteredQuestion , askQuestionHandler }) {
    const navigate = useNavigate();
    const handleAsk = async (e) => {
        e.preventDefault();
        console.log("Question Asked", e.target);

        const newQuestion = {
            question: enteredQuestion,
            farmer: farmer
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
                navigate('/QuestionPage')
            }
            else {
                console.error('Question asking failed');
            }
        } catch (error) {
            console.error('Error occurred during asking question:',error);
        }

    };
    return (
        <>
            <div className={styles.search_container}>
                <input idName={styles.searchBar} type="text" placeholder="Ask a question..." 
                onChange={askQuestionHandler} /> 
                <Link to='/QuestionPage'>
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