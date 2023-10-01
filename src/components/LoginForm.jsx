import styles from './LoginForm.module.css'
import {motion} from 'framer-motion'
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import ToggleButton from "../components/ToggleButton"

function LoginForm({ setUser }) {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted" , e.target);

        const formData = new FormData(e.target);

        const userData = {
            username: formData.get("username"),
            password: formData.get("password")
        };

        try {
            const response = await fetch('http://localhost:5000/auth/login' , {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })
    
            if(response.ok) {
                console.log('Login successful');
                navigate('/FarmerHomepage');
            }
            else {
                console.error('Login failed');
            }
        } catch {
            console.error('Error occurred during login: ',error);
        };
    };
    return (
      <>
        <div className={styles.container}>
            <h2><b><b>Login</b></b></h2>
            <form  onSubmit={handleSubmit}>
                
                <div className={styles.form_group}>
                    <label for="username">Username:</label>
                    <input onChange={setUser} type="text" id="username" name="username" required/>
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
        <ToggleButton/> 
        </>                   
    )
}

export default LoginForm