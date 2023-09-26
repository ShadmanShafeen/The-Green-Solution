import styles from './AccountCreateForm.module.css'
import { motion } from 'framer-motion'
import { Link , Form , redirect} from 'react-router-dom'

function AccountCreateForm() {
    return (
        <div className={styles.container}>
            <h2><b><b>Account Creation</b></b></h2>
            <form method="POST" action="" >
                
                <div className={styles.form_group}>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>

                <div className={styles.form_group}>
                    <label for="contactno">Contact No:</label>
                    <input type="text" id="contactno" name="contactno" required/>
                </div>

                <div className={styles.form_group}>
                    <label for="nid">National ID</label>
                    <input type="text" id="nid" name="nid"/>
                </div>
                
                <div className={styles.form_group}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                </div>


                <div className={styles.form_group}>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>

                <div className={styles.form_group}>
                    <Link to='/FarmerHomepage'>                              
                        <motion.button 
                        className={styles.button}
                        onClick={null}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        >Create Account</motion.button>
                    </Link>
                </div>
            </form>

            <div className={styles.register_link}>
                <p>Already have an account? <Link to='/Login'> Log in </Link></p>
                
            </div>
        </div>  
    )
}

export default AccountCreateForm