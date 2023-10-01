import Buttons from "../components/Buttons";
import Header from "../components/Header";
import  './Home.module.css';
import ToggleButton from "../components/ToggleButton"
import myImageBackground from "../components/images/background.png"



function Home() {
    return (
        <div>
            <header> <Header/>
                     <ToggleButton/>
            </header>
            <div className= "background">
               
                 <Buttons/> 
            </div>
              
        </div>
    )
}

export default Home