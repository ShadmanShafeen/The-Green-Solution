import Header from "../components/Header";
import styles from "./AgronomistHome.module.css" 
// import ToggleButton from "../components/ToggleButton";
import LogOutButton from "../components/LogOutButton";
import AgronomistQnAList from "../components/AgronomistQnAList";
import BackgroundStyle from "../components/BackgroundStyle";
function AgronomistHome() {
    
    const agronomist =  JSON.parse(localStorage.getItem('agronomist'));
    return (
        <>
            <div className={styles.LoginPlaceholderAg}>
                <p className={styles.AgProfile}> Logged in as: <p className={styles.AgName}>{agronomist}</p> </p>
            </div>
            <Header/>
            {/* <ToggleButton/> */}
            <LogOutButton/>
            <AgronomistQnAList />
            <BackgroundStyle/>
        </>
    );
}

export default AgronomistHome