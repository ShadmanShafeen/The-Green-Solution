import { Link } from 'react-router-dom';
import styles from './Sign_inButton.module.css'
import { motion } from 'framer-motion'

function Sign_inButton ()
{
    return(
        <Link to ='/'>
        <motion.button className={styles.Sign_inButton} onClick={null}
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.9}}
            transition={{duration: 0.5}}
            >Sign In
        </motion.button>   
        </Link>
    )
}
 
export default Sign_inButton