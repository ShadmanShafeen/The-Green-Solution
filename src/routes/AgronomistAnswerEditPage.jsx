import AgronomistAnswerEditList from "../components/AgronomistAnswerEditList"
import BackgroundStyle from "../components/BackgroundStyle"
import Header from "../components/Header"
import LogOutButton from "../components/LogOutButton"
import styles from "./AgronomistAnswerEditPage.module.css" 
function AgronomistAnswerEditPage() {
    const agronomist = JSON.parse(localStorage.getItem('agronomist'));
    return (
        <>
            <div className={styles.LoginPlaceholderAg}>
                <p className={styles.AgProfile}> Logged in as: <i>{agronomist}</i> </p>
            </div>
            <LogOutButton/>
            <Header/>
            <BackgroundStyle/>
            <AgronomistAnswerEditList />
        </>
    )
}

export default AgronomistAnswerEditPage