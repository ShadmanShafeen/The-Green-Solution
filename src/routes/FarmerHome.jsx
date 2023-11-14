import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PrevQuestionList from "../components/PrevQuestionList"
import ToggleButton from "../components/ToggleButton"
import LogOutButton from "../components/LogOutButton"
import BackgroundStyle from "../components/BackgroundStyle"
import AnimatedText from "../components/AnimatedText"
import RelevantQuestionList from "../components/RelevantQuestionList"
import { useEffect, useState } from "react"

function FarmerHome() {
    const [enteredQuestion , setEnteredQuestion] = useState('');
    const [delayedQuestion , setDelayedQuestion] = useState('');
    useEffect(() => {
        const timeout = setTimeout(()=> {
            setDelayedQuestion(enteredQuestion);
        } , 2000);
        return () => clearTimeout(timeout);
    }, [enteredQuestion]);

    function enterQuestionHandler(event) {
        setEnteredQuestion(event.target.value);
    }
    return (
        <>
           
            <Header />
            <SearchBar enteredQuestion={enteredQuestion} enterQuestionHandler={enterQuestionHandler} />
            <RelevantQuestionList enteredQuestion={delayedQuestion}/>
            <PrevQuestionList />
            <ToggleButton/>
            <LogOutButton/> 
            <BackgroundStyle/>
            <AnimatedText/>
        </>
    )
}

export default FarmerHome