import styles from './Header.module.css'

function Header() {
   return ( 
        <header className={styles.header}>
                <nav>
                <ul className={styles.list}>
                    
                    <li>How It Works</li>
                    <li>Marketplace</li>
                    <li>About Us</li>
                </ul>
                </nav>
               
        </header>       
   )
}

export default Header