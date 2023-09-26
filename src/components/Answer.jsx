import styles from './Answer.module.css'

import { motion } from 'framer-motion';
function Answer ({answer , agronomist}) {
    return (
        <>
            <li className={styles.answer_box}>
                <p className={styles.answer}>{answer}</p>
                    
                <p className={styles.agronomist}>{agronomist}</p>
            </li>
        </>
    );
}

export default Answer;