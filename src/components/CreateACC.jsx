import styles from './CreateACC.module.css';
import  Buttons2 from "./Buttons2";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import BackgroundStyle from "./BackgroundStyle";
import Header from "./Header"
function CreateACC(){
    return(
<>
<div className={styles.BGCreateACCAGS}>
<Buttons2/>
   <div className={styles.ACCBgBox} >
  
   <p className={styles.ACConfirmation}>Create your account as </p>
    <p className={styles.NoAccConfirmation}>Already have an account?</p>
    <Link to ='/LoginPageAGS'><p className={styles.AcCreateACC}><u>Log in here</u></p></Link>
    </div> 
<Header/>
<BackgroundStyle/>

</div>

</>
 )
}
export default CreateACC