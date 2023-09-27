import styles from './ToggleButton.module.css'

function ToggleButton()
{
    return(
        <>
        <label className={styles.switch}>
                        <input type="checkbox"/>
                        <span className={styles.slider_round}></span>
        </label>
        </>
    )
}


export default ToggleButton