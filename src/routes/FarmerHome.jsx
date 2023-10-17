import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PrevQuestionList from "../components/PrevQuestionList"
import ToggleButton from "../components/ToggleButton"
import LogOutButton from "../components/LogOutButton"
import BackgroundStyle from "../components/BackgroundStyle"
import AnimatedText from "../components/AnimatedText"
function FarmerHome() {
    return (
        <>
           
            <Header />
            <SearchBar />
            <PrevQuestionList />
            <ToggleButton/>
            <LogOutButton/> 
            <BackgroundStyle/>
            <AnimatedText/>
           
        </>
    )
}

export default FarmerHome