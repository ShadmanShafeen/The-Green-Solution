// import Buttons from "../components/Buttons";
import GetStarted  from "../components/GetStarted";
import Header from "../components/Header";
import styles from "./Home.module.css"
import BackgroundStyleHome from "../components/BackgroundStyleHome";
import FooterPortion from "../components/FooterPortion";
import AnimatedTextHome  from "../components/AnimatedTextHome"
import { Link } from "react-router-dom";

function Home() {
    return (
        
         <>
    
         <div className={styles.homeContainer}>
            <Header/>
            <FooterPortion/>
            <BackgroundStyleHome/>
            {/* <Buttons/> */}
            <GetStarted/>

            <AnimatedTextHome/> 

      
        </div>  
      <div className={styles.HomePageInfo}>
      
            <p className={styles.InfoPage}>
                <div><ul className={styles.FirstHorizontalList}>
                       <li className={styles.Picture1}> </li>
                       <li className={styles.TextPortion}><br/>Farmers of our country are not up-to-date with latest agriculture related research and studies. As such, they face difficulties in maximizing their yield. <br/>It is imperative that farmers get access to the latest agriculture research, and are able to find solutions to their problems.</li>    
                    </ul>
                    <ul className={styles.SecondHorizontalList}>
                        <li className={styles.textPortion2}>The Green Solution is a question-and-answer web application. Here the farmers will be able to ask questions about the problems they face daily during crop production and will get solutions from the agronomists. The main goal of our website is to solve the problems of farmers and creating new scopes for the agronomist for their research.<br/></li>
                        <li className={styles.Picture2}></li>
                    </ul>
                    <ul className={styles.ThirdHorizontalList}>
                        <li className={styles.Picture3}></li>
                        <li  className={styles.TextPortion3}>
                        <br/> In our website we have implemented the Voice-to-Text conversion facilities for the farmers, added relevant questions in the database using Natural Language Processing, created scope to directly communicate with the agronomist and Answer rating Procedure to rate the answers. </li>
                    </ul>
                    <br/>
                </div>
                 </p>
             </div>

        

        
        

        </>    

    )
}

export default Home