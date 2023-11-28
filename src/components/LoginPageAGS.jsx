import styles from './LoginPageAGS.module.css';
import  Buttons from "./Buttons";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import BackgroundStyle from "./BackgroundStyle";
import Header from "./Header"
function LoginPageAGS(){
    return(
<>
<div className={styles.BGLoginPageAGS}>
<Buttons/>
   <div className={styles.BgBox}>
  
   <p className={styles.Confirmation}> Log in here to continue as</p>
    <p className={styles.NoConfirmation}>Don't have an account?</p>
    <Link to ='/CreateACC'><p className={styles.CreateACC}><u>Create Account</u></p></Link>
    </div> 
<Header/>

<BackgroundStyle/>

</div>

</>
 )
}
export default LoginPageAGS