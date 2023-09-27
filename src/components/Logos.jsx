import styles from './Logos.css'
import myImageLogo from './images/TheGreenSolution.png'

function Logos()
{
    return(
        <div className={styles.Logos}>
          <img src={myImageLogo}/>
        </div>        
        
    )
}


export default Logos