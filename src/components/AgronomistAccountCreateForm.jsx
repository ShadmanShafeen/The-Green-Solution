import { useEffect, useState } from 'react'; // Import useState if needed
import styles from './AgronomistAccountCreateForm.module.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ToggleButton from "../components/ToggleButton"

function AgronomistAccountCreateForm() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted", e.target);
        
        const formData = new FormData(e.target);

        const userData = {
            name: formData.get("name"),
            contact: formData.get("contact"),
            NID: formData.get("NID"),
            username: formData.get("username"),
            password: formData.get("password")
        };

        try {
            const response = await fetch('http://localhost:5000/auth/agronomistsignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('Signup successful');
                // Redirect or show a success message here
                navigate('/AgronomistLogin');
            } else {
                console.error('Signup failed');
                // Handle the error, e.g., show an error message to the user
            }
        } catch (error) {
            console.error('Error occurred during signup:', error);
            // Handle network errors or other exceptions
        }
    };

    return (
        <>
        
        <div className={styles.container}>
            <h2><b><b>Agronomist Account Creation</b></b></h2>
            <form onSubmit={handleSubmit}>
                
                <div className={styles.form_group}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="contact">Contact No:</label>
                    <input type="text" id="contact" name="contact"/>
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="NID">National ID:</label>
                    <input type="text" id="NID" name="NID"/>
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"/>
                </div>


                <div className={styles.form_group}>
                    <motion.button 
                        className={styles.button}
                        type='submit'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{duration: 0.5}}
                    >Create Account
                    </motion.button>
                </div>
            </form>

            <div className={styles.register_link}>
                <p>Already have an account? <Link to='/AgronomistLogin'> Log in </Link></p>
            </div>
        </div>  
        <ToggleButton/>
        </>
    );
}

export default AgronomistAccountCreateForm;
