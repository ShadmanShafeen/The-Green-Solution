import styles from './AccountCreateForm.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function AccountCreateForm() {
    return (
        <div class={styles.container}>
            <h2><b><b>Account Creation</b></b></h2>
            <form action="" method="POST">
                
                <div class={styles.form_group}>
                    <label for="username">Name:</label>
                    <input type="text" id="username" name="username"/>
                </div>

                <div class={styles.form_group}>
                    <label for="username">Contact No:</label>
                    <input type="text" id="username" name="username"/>
                </div>

                <div class={styles.form_group}>
                    <label for="username">National ID</label>
                    <input type="text" id="username" name="username"/>
                </div>
                
                <div class={styles.form_group}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                </div>


                <div class={styles.form_group}>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>

                <div class={styles.form_group}>
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

            <div class={styles.register_link}>
                <p>Already have an account? <Link to='/Login'> Log in </Link></p>
                
            </div>
        </div>  
    )
}

export default AccountCreateForm