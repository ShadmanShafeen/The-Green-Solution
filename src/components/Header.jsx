import styles from './Header.module.css'
import myImage from './images/TheGreenSolution.png'
// import ToggleButton from './ToggleButton'
// import LogOutButton from './LogOutButton'



function Header() {
   return ( <>
        
        <div className={styles.main_header}>
                <div className={styles.logo}>
                        <img src={myImage}/>
                </div>
        
                <nav>
                <ul className={styles.list}>
                
                    <li>How It Works</li>
                    <li>Home</li>
                    <li>About Us</li>
                    
                   
                </ul>
              {/* <ToggleButton/>
              <LogOutButton/> */}
               </nav>
         </div> 
                 
   </>

      
   )
}

export default Header