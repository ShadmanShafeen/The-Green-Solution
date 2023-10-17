import styles from './LoginForm.module.css'
import {motion} from 'framer-motion'
import { Link, redirect, useNavigate } from 'react-router-dom';
import ToggleButton from "./ToggleButton"

function LoginForm() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted" , e.target);

        const formData = new FormData(e.target);

        const userData = {
            name: formData.get("name"),
            NID: formData.get("NID")
        };

        localStorage.setItem('farmer',JSON.stringify(userData.name));
        localStorage.setItem('NID',JSON.stringify(userData.NID));

        try {
            const response = await fetch('http://localhost:5000/auth/farmerlogin' , {
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
            <h2><b><b>Farmer Login</b></b></h2>
            <form  onSubmit={handleSubmit}>
                
                <div className={styles.form_group}>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>

                <div className={styles.form_group}>
                    <label for="NID">National ID:</label>
                    <input type="password" id="NID" name="NID" required/>
                </div>

                <div className={styles.form_group}>                              
                    <motion.button 
                    className={styles.button}
                    onClick={null}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.75}}
                    >Login</motion.button>
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