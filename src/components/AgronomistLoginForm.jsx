import styles from './AgronomistLoginForm.module.css'
import {motion} from 'framer-motion'
import { Link, redirect, useNavigate } from 'react-router-dom';
// import ToggleButton from "./ToggleButton"
import axios from 'axios';

function AgronomistLoginForm() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted" , e.target);

        const formData = new FormData(e.target);

        const userData = {
            username: formData.get("username"),
            password: formData.get("password")
        };
        localStorage.setItem('usertype',JSON.stringify('agronomist'));
        localStorage.setItem('agronomist',JSON.stringify(userData.username));
        
        // localStorage.setItem('password',JSON.stringify(userData.NID));

        try {
            const response = await fetch('http://localhost:5000/auth/agronomistlogin' , {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })
    
            if(response.ok) {
                console.log('Login successful');
                navigate('/AgronomistHomepage');
            }
            else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error occurred during login: ',error);
        };
        
        try { 
            const response = await axios.get(`http://localhost:5000/fetchagronomistID/${userData.username}` , {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            if (response.status === 200) {
                const fetchedData = response.data;
                const userID = fetchedData.data._id;
                localStorage.setItem('userID',JSON.stringify(userID));
                console.log(userID);
            }
            else {
                console.log('Agronomist ID Fetch Failed')
            }
        } catch {
            console.error('Error occurred during ID fetching: ' , error);
        };
        
    };
    
    return (
      <>
        <div className={styles.container}>
            <h2><b><b>Agronomist Login</b></b></h2>
            <form  onSubmit={handleSubmit}>
                
                <div className={styles.form_group}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required/>
                </div>

                <div className={styles.form_group}>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required/>
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
                <p>Don't have an account? <Link to='/AgronomistAccountCreation'>Create One</Link></p>
                
            </div>
        </div> 
    
        </>                   
    )
}

export default AgronomistLoginForm