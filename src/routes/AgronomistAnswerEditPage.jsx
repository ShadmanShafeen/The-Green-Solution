import AgronomistAnswerEditList from "../components/AgronomistAnswerEditList"
import BackgroundStyle from "../components/BackgroundStyle"
import Header from "../components/Header"
import LogOutButton from "../components/LogOutButton"


function AgronomistAnswerEditPage() {
    return (
        <>
            <LogOutButton/>
            <Header/>
            <BackgroundStyle/>
            <AgronomistAnswerEditList />
        </>
    )
}

export default AgronomistAnswerEditPage