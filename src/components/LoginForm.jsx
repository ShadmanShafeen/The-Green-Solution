import styles from './LoginForm.module.css'
import {motion} from 'framer-motion'
import { Form, Link, redirect } from 'react-router-dom';


function LoginForm() {
    return (
        <div className={styles.container}>
            <h2><b><b>Login</b></b></h2>
            <form method="post" action="">
                <div className={styles.form_group}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required/>
                </div>


                <div className={styles.form_group}>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required/>
                </div>

                <div className={styles.form_group}>
                    <Link to='/FarmerHomepage'>                              
                        <motion.button 
                        className={styles.button}
                        onClick={null}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        >Login</motion.button>
                    </Link>
                </div>
            </form>

            <div className={styles.register_link}>
                <p>Don't have an account? <Link to='/AccountCreation'>Create One</Link></p>
                
            </div>
        </div>                     
    )
}

export default LoginForm