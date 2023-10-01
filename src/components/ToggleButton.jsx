import styles from './ToggleButton.module.css'

function ToggleButton()
{
    return(
        <>
       

       <div className={styles.Background}>
        <label className={styles.toggle}>
                        <input type="checkbox"/>
                        <span className={styles.slider}></span>
                        <span className={styles.labels} data-on="Bangla" data-off="English"></span>
                      </label>
        </div>
        </>
    )
}


export default ToggleButton