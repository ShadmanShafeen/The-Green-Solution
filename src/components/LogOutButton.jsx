import { Link } from 'react-router-dom';
import styles from './LogOutButton.module.css'
import { motion } from 'framer-motion'

function LogOutButton ()
{
    return(
        <Link to ='/'>
        <motion.button className={styles.LogOutButton} onClick={null}
    whileHover={{scale: 1.2}}
    whileTap={{scale: 0.9}}>
      Log Out
    </motion.button>   

        </Link>
     
    )
}
 
export default LogOutButton