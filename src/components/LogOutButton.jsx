import { Link } from 'react-router-dom';
import styles from './LogOutButton.module.css'
import { motion } from 'framer-motion'

function LogOutButton ()
{   
    function handleLogout() {
        localStorage.removeItem('farmer');
        localStorage.removeItem('agronomist');
        localStorage.removeItem('usertype');
    }
    return(
        <Link to ='/'>
        <motion.button className={styles.LogOutButton} onClick={handleLogout}
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.9}}
            transition={{duration: 0.5}}
            >Log Out
        </motion.button>   
        </Link>
    )
}
 
export default LogOutButton