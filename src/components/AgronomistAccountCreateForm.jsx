import { useEffect, useState } from 'react'; // Import useState if needed
import styles from './AgronomistAccountCreateForm.module.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
// import ToggleButton from "../components/ToggleButton";
import { ToastContainer , toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import BASE_URL from "../CONSTANT"


function AgronomistAccountCreateForm() {
    const navigate = useNavigate();

    toast.info('Contact Us To Collect Your Agronomist Code' , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted", e.target);
        
        const formData = new FormData(e.target);

        const userData = {
            name: formData.get("name"),
            contact: formData.get("contact"),
            email: formData.get("email"),
            NID: formData.get("NID"),
            username: formData.get("username"),
            password: formData.get("password"),
            agronomistCode : formData.get("agronomistCode")
        };

        try {
            const response = await fetch(`${BASE_URL}/auth/agronomistsignup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.status === 200) {
                console.log('Signup successful');
                // Redirect or show a success message here
                navigate('/AgronomistLogin');
            } 
            else if (response.status === 400) {
                toast.error('Username Already Exists' , {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else if (response.status === 404) {
                toast.error('You Have Entered A Wrong Agronomist Code' , {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setTimeout(() => {
                    toast.info('Contact Us To Collect Your Agronomist Code. Our Contact Info Is In Our About Us Page' , {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                },3000)
            }
            else {
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
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}
        />
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
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email"/>
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
                    <label htmlFor="agronomistCode">Agronomist Code:</label>
                    <input type="password" id="agronomistCode" name="agronomistCode"/>
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
                <p>Already have an account? <Link to='/AgronomistLogin'> Log in </Link></p>
            </div>
        </div>  
      
        </>
    );
}

export default AgronomistAccountCreateForm;
