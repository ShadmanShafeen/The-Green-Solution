import AgronomistAnswerEditList from "../components/AgronomistAnswerEditList"
import BackgroundStyle from "../components/BackgroundStyle"
import Header from "../components/Header"
import LogOutButton from "../components/LogOutButton"
import styles from "./AgronomistAnswerEditPage.module.css" 
function AgronomistAnswerEditPage() {
    return (
        <>
            <div className={styles.LoginPlaceholderAg}>
                <p className={styles.AgProfile}> Logged in as: <i>Shitol</i> </p>
            </div>
            <LogOutButton/>
            <Header/>
            <BackgroundStyle/>
            <AgronomistAnswerEditList />
        </>
    )
}

export default AgronomistAnswerEditPage