import Buttons from "../components/Buttons";
import Header from "../components/Header";
import  './Home.module.css';
import ToggleButton from "../components/ToggleButton"
// import myImageBackground from "../components/images/background.png"
import styles from "./Home.module.css"


function Home() {
    return (
        
         
        <div className={styles.homeContainer}>
             <Header/>
            <Buttons/>
            <ToggleButton/>

        
    </div>
       
    )
}

export default Home