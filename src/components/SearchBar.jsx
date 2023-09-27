import styles from './SearchBar.module.css'
import { motion } from 'framer-motion'






function SearchBar() {
    return (
        <>
            <div className={styles.search_container}>
                     <input idName={styles.searchBar} type="text" placeholder="Ask your question here..." /> 
                      <motion.button
                      className={styles.searchButton} 
                      type="Search"
                      whileHover={{scale: 1.2}}
                      whileTap={{scale: 0.9}}
                            
                      ></motion.button>
            </div>
            <div >
                        <p>
                           
                            <motion.button 
                            className={styles.twoButtons1}
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            ></motion.button>
                            
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