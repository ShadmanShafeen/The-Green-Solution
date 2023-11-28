import { Link } from 'react-router-dom';
import styles from './Sign_inButton.module.css'
import { motion } from 'framer-motion'

function Sign_inButton ()
{
    return(
        <>
       
        <div className={styles.Dropdown}>

     
        <motion.button className={styles.Sign_inButton} onClick={null}
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.9}}
            transition={{duration: 0.5}}
            >Sign In
             <div className={styles.dropdownContent}>
                 <Link className={styles.dropdownItem1}>Agronomist</Link>
                 <Link className={styles.dropdownItem2}>Farmer</Link>
                </div> 
        </motion.button>  
                
        </div>
       
        </>
    )
}
 
export default Sign_inButton