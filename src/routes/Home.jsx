import Buttons from "../components/Buttons";
import Header from "../components/Header";
import styles from './Home.module.css';
import ToggleButton from "../components/ToggleButton"


function Home() {
    return (
        <body>
            <Header />
            <Buttons />
            <ToggleButton/>
           
        </body>
    )
}

export default Home