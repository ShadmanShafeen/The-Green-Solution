import styles from './LoginForm.module.css'
import {motion} from 'framer-motion'
import { Link, redirect, useNavigate } from 'react-router-dom';
// import ToggleButton from "./ToggleButton"
import BackgroundStyle from "./BackgroundStyle"
import axios from 'axios';
import { ToastContainer , toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        localStorage.setItem('usertype',JSON.stringify('farmer'));
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
                toast.error('You Have Entered A Wrong Username or NID' , {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                console.error('Login failed');
            }
        } catch {
            console.error('Error occurred during login: ',error);
        };

        try { 
            const response = await axios.get(`http://localhost:5000/fetchfarmerID/${userData.NID}` , {
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
                console.log('Farmer ID Fetch Failed')
            }
        } catch {
            console.error('Error occurred during ID fetching: ' , error);
        };
        
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
        <BackgroundStyle/>
        </>                   
    )
}

export default LoginForm 