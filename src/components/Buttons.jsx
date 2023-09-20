import { Link } from 'react-router-dom';
import styles from './Buttons.module.css'
import { motion } from 'framer-motion'
function Buttons() {
    
    
    return (
        <div className={styles.center}>
            <p className={styles.fontText}>Are you a/an.......?</p>
            <p>
                <Link to='/Login'>
                    <motion.button 
                    className={styles.mainButton}
                    onClick={null}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    >Farmer</motion.button>
                </Link>
                
                <Link>
                <motion.button 
                className={styles.mainButton}
                onClick={null}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                >Agronomist</motion.button>
                </Link>
            </p>
        </div>
    );
}

export default Buttons