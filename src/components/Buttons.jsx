import { Link } from 'react-router-dom';
import styles from './Buttons.module.css'
import { motion } from 'framer-motion'
import myImageBackground from './images/background.png'
function Buttons() {
    
    
    return (
        
            
        <div className={styles.center}>
        {/* <img src={myImageBackground}/> */}
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
                
                <Link to='/Login'>
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