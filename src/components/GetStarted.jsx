import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import styles from './GetStarted.module.css'

function GetStarted() { 
return(
       <>
    

<div className={styles.AlignCenter} >
<Link to='/LoginPageAGS'>
                    <motion.button 
                    className={styles.BoxButton}
                    onClick={null}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    >Get Started</motion.button>
                </Link>
</div>




       </>
);

}
export default GetStarted