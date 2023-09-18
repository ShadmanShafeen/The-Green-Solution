import styles from './Buttons.module.css'

function Buttons() {
    
    
    return (
        <>
            <p>Are you a/an.......?</p>
            <p>
                <button className={styles.button}>Farmer</button>
                <button className={styles.button}>Agronomist</button>
            </p>
        </>
    );
}

export default Buttons