import { Link } from 'react-router-dom';
import BackgroundStyle from "./BackgroundStyle"
import styles from "./HowItWorks.module.css"
import { motion } from 'framer-motion'
import FooterPortion from './FooterPortion';
function HowItWorks() {
    return (
        <>
        <FooterPortion/>
       <Link to='/'>
    
        <motion.button className={styles.ReturnButton} whileHover={{scale: 1.2, border: "2px solid #0c0202"}}
                        whileTap={{scale: 0.9}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
       </motion.button>
       </Link>
     <BackgroundStyle/>
     
       <p className={styles.HeadingHIW}><u>How It Works?</u></p>
        <br/>
        <p className={styles.ListFA}>
            <ul>
                <li className={styles.HorizontalList1}>
                <p className={styles.FarmerText}>Farmers:</p><br/><br/>
                <p className={styles.TextAqAv}><br/>
                <ul className={styles.AlignAqAv}>
                    <li><b>Account Creation & login:</b> If you don’t have an account, click on ‘Create One’. Fill in your Name, National ID and Contact Number in the form. Click on the submit button. If you already have an account, fill in your Name and National ID in the form and click on the Login button</li>
                  <br/>  <li><b>Question Asking: </b>   Enter your question into the search bar. Alternately, click on the ‘Speak here’ button and ask your question by speaking into the microphone. Click on the ‘Search’ button to ask your question. An agronomist will then answer your question. This may take time. Be patient! </li>
                  <br/>  <li><b>Answer rating: </b>   Click on the  ‘Useful’ button next to an answer if you find the answer helpful, otherwise click on the ‘Not Useful’ button if the answer is not helpful.</li>
                  <br/>  <li><b>Viewing Previous & Relevant Questions: </b> Questions you have asked previously will be shown to the right of the search bar. Questions related to the question you have entered in the search bar will be shown below. Clicking on either question will navigate you to the Question page of the corresponding question, with answers (if an agronomist has answered that question) shown below the question.</li>
                </ul>
                </p>
                </li>
                 <li className={styles.HorizontalList2}><div className={styles.bgFarmer}></div> </li>
            </ul>
        </p>
        
        <p className={styles.ListAgTP}>
           <ul>
            <li className={styles.HorizontalList3}><div className={styles.bgAgronomist}></div></li>
            <li className={styles.HorizontalList4}>
                <p className={styles.AgronomistText}>Agronomist: </p><br/><br/>
                <p className={styles.TextAgAAU}><br/>
                    <ul className={styles.AlignAAU}>
                        <li><b>Account Creation & login: </b>If Agronomists can create account and log in to their own account to see the questions asked by the farmers and answer those.If you don't have an account, collect your agronomist code from us   and fill in the form. If you have an account, login with your username and password.Your username must be unique.</li><br/>
                        <li><b>Answering & Sorting Questions:</b> Agronomists can sort the questions based on the answered one. They can answer the questions. For example,if there is any unanswered  question that will be displayed on the top whereas if it is answered it will automatically be sorted and displayed on the last of the listed pending question. </li><br/>
                        <li><b>Updating Answer:  </b>Agronomists can update the questions but the previous answer will also be showed as well as the updated one.</li><br/>
                    </ul>
                </p>
            </li>
           </ul>
        </p>

        </>   
    )
}

export default HowItWorks