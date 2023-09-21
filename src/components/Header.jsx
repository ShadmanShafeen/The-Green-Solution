import styles from './Header.module.css'

function Header() {
   return ( 
        <div className={styles.main_header}>
                <nav>
                <ul className={styles.list}>
                    
                    <li>How It Works</li>
                    <li>Marketplace</li>
                    <li>About Us</li>
                </ul>
                </nav>
               
        </div>       
   )
}

export default Header