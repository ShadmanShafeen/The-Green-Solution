import Buttons from "../components/Buttons";
import Header from "../components/Header";
// import Sign_inButton from "../components/Sign_inButton";
import  './Home.module.css';
// import ToggleButton from "../components/ToggleButton"
// import myImageBackground from "../components/images/background.png"
import styles from "./Home.module.css"
import AnimatedTextHome  from "../components/AnimatedTextHome"

function Home() {
    return (
        
         
        <div className={styles.homeContainer}>
            <Header/>
            <Buttons/>
            {/* <ToggleButton/> */}
            <AnimatedTextHome/> 
            {/* <Sign_inButton/>  */}
        </div>      
    )
}

export default Home