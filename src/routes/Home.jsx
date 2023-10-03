import Buttons from "../components/Buttons";
import Header from "../components/Header";
import  './Home.module.css';
import ToggleButton from "../components/ToggleButton"
// import myImageBackground from "../components/images/background.png"



function Home() {
    return (
        <>
         
            <div className="backgroundImage">
            <Header/>
            <ToggleButton/>
            <Buttons/>  
          
            </div>
           
           
             </>  
       
    )
}

export default Home