import { useEffect, useState } from 'react'; // Import useState if needed
import styles from './AccountCreateForm.module.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ToggleButton from "../components/ToggleButton"
import BASE_URL from "../CONSTANT"

function AccountCreateForm() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted", e.target);
        
        const formData = new FormData(e.target);

        const userData = {
            name: formData.get("name"),
            contact: formData.get("contact"),
            NID: formData.get("NID")
        };

        try {
            const response = await fetch(`${BASE_URL}/auth/farmersignup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('Signup successful');
                // Redirect or show a success message here
                navigate('/Login');
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
            <h2><b><b>Farmer Account Creation</b></b></h2>
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
                    <label htmlFor="NID">National ID</label>
                    <input type="password" id="NID" name="NID"/>
                </div>

                <br />
                <div className={styles.form_group}>
                    <motion.button 
                        className={styles.button}
                        type='submit'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{duration: 0.75}}
                    >Create Account
                    </motion.button>
                </div>
            </form>

            <div className={styles.register_link}>
                <p>Already have an account? <Link to='/Login'> Log in </Link></p>
            </div>
        </div>  
        </>
    );
}

export default AccountCreateForm;
