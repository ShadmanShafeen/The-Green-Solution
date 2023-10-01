import styles from './SearchBar.module.css'
import { motion } from 'framer-motion'





import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchBar({askQuestionHandler}) {
  
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
                            
                    ></motion.button>
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