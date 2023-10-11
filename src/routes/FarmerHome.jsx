import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PrevQuestionList from "../components/PrevQuestionList"
import ToggleButton from "../components/ToggleButton"
import LogOutButton from "../components/LogOutButton"

function FarmerHome() {
    return (
        <>
            <Header />
            <SearchBar />
            <PrevQuestionList />
            <ToggleButton/>
            <LogOutButton/> 
        </>
    )
}

export default FarmerHome