import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PrevQuestionList from "../components/PrevQuestionList"
import ToggleButton from "../components/ToggleButton"
import LogOutButton from "../components/LogOutButton"
import { useState } from "react"

function FarmerHome({ enteredQuestion , enterQuestionHandler }) {
    
    return (
        <>
           
            <Header />
            <SearchBar enteredQuestion={enteredQuestion} enterQuestionHandler={enterQuestionHandler} />
            <PrevQuestionList />
            <ToggleButton/>
            <LogOutButton/> 
           
        </>
    )
}

export default FarmerHome