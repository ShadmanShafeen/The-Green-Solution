import styles from './Buttons.module.css'

function Buttons() {
    
    
    return (
        <>
        <div >
        <p className={styles.FontText}>Are you a/an.......?</p>
            
            <ul className={styles.horizontal} type="none">
               <li><button className={styles.button1}>Agronomist</button></li>
               <li><button className={styles.button2} >Farmer</button></li>
            </ul>
            
        </div>
          
            
        </>
    );
}

export default Buttons