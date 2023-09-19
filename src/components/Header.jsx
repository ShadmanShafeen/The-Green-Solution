import styles from './Header.module.css'

function Header() {
   return ( 
        <>
        <body>
        <header className={styles.header}>
                <nav>
                <ul className={styles.list}>
                    
                    <li>How It Works</li>
                    <li>Marketplace</li>
                    <li>About Us</li>
                </ul>
                </nav>
               
            </header>
            

        </body>
             
        </>
   )
}

export default Header