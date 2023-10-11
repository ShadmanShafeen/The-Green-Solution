import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PrevQuestionList from "../components/PrevQuestionList"
import ToggleButton from "../components/ToggleButton"
import LogOutButton from "../components/LogOutButton"


function FarmerHome({farmer , question , askQuestionHandler}) {
    return (
        <>
           
            <Header />
            <SearchBar farmer={farmer} enteredQuestion={question} askQuestionHandler={askQuestionHandler} />
            <PrevQuestionList/>
            <ToggleButton/>
            <LogOutButton/> 
           
        </>
    )
}

export default FarmerHome