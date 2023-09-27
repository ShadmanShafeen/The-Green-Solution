import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PrevQuestion from "../components/PrevQuestion"
import ToggleButton from "../components/ToggleButton"


function FarmerHome({askQuestionHandler}) {
    return (
        <>
            <Header />
            <SearchBar />
            <PrevQuestion/>
            <ToggleButton/>
            
            
            
            <SearchBar askQuestionHandler={askQuestionHandler} />           
        </>
    )
}

export default FarmerHome