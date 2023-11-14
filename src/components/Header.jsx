import styles from './Header.module.css'
import myImage from './images/TheGreenSolution.png'
// import ToggleButton from './ToggleButton'
// import LogOutButton from './LogOutButton'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


function Header() {
   return ( <>
       
       
        <div className={styles.main_header}>
                <div className={styles.logo}>
                        <img src={myImage}/>
                        
                </div>
        
                <nav>
                <ul className={styles.list}>
                
                   
                   <Link to ='/HowItWorks'>
                    <li className={styles.HList}>How It Works
                    <svg xmlns="http://www.w3.org/2000/svg"  width="1.71em" height="1.71em" viewBox="0 0 24 24" stroke-width="0" fill="#8ee4af"> 
                       <path d="M12 19c.828 0 1.5.672 1.5 1.5S12.828 22 12 22s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm0-17c3.314 0 6 2.686 6 6 0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8c0-2.21-1.79-4-4-4S8 5.79 8 8v1H6V8c0-3.314 2.686-6 6-6z"></path></svg>
                    </li>
                    </Link>
                    <Link to='/'><li className={styles.HList}> Home
                         <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024" stroke-width="0" fill="#8ee4af"  class="icon">
                                  <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                                  </svg>
                                </li> </Link>

                    <Link to ='/AboutUs'>
                    <li className={styles.HList}>About Us <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
          <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
        </svg></li>
        </Link>
                                         
                   
                </ul>
             
               </nav>
             </div> 

        </>   
   )
}

export default Header