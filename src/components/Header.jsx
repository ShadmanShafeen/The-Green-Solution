import styles from './Header.module.css'
import myImage from './images/TheGreenSolution.png'


function Header() {
   return ( <>
   
        <div className={styles.main_header}>
                <nav>
                <ul className={styles.list}>
                    <li className={styles.logo}>
                        <img src={myImage}/>
                     </li>
                    <li>How It Works</li>
                    <li>Marketplace</li>
                   <li>About Us</li>
                   
                </ul>
                </nav>
               
        </div>     
   </>

      
   )
}

export default Header