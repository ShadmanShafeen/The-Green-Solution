import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

function FarmerHome({askQuestionHandler}) {
    return (
        <>
            <Header />
            <SearchBar askQuestionHandler={askQuestionHandler} />           
        </>
    )
}

export default FarmerHome