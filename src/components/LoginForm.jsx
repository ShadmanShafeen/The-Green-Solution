import styles from './LoginForm.module.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <div class={styles.container}>
            <h2><b><b>Login</b></b></h2>
            <form action="" method="POST">
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
                        >Login</motion.button>
                    </Link>
                </div>
            </form>

            <div class={styles.register_link}>
                <p>Don't have an account? <Link to='/AccountCreation'>Create One</Link></p>
                
            </div>
        </div>                     
    )
}

export default LoginForm