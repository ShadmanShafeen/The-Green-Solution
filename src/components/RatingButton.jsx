import styles from './RatingButton.module.css'

import { motion } from 'framer-motion';
function RatingButton () {
    return (
       <>
    
                    <li>
                    <button className={styles.Btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="4.2em" width="4.2em"className={styles.arrow} viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
                    </button>
                    </li>

                    <li>
                    <button className={styles.Btn1}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow1} height="4.2em" width="4.2em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                    </button>
                    </li>
      
         </>
             
            
    );
}

export default RatingButton;