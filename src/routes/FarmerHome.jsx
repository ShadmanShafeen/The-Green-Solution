import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PrevQuestionList from "../components/PrevQuestionList"
import styles from "./FarmerHome.module.css" 

// import ToggleButton from "../components/ToggleButton"

import LogOutButton from "../components/LogOutButton"
import BackgroundStyle from "../components/BackgroundStyle"
import AnimatedText from "../components/AnimatedText"
import RelevantQuestionList from "../components/RelevantQuestionList"
import { useEffect, useState } from "react"

function FarmerHome() {
    const [enteredQuestion, setEnteredQuestion] = useState('');
    const [delayedQuestion , setDelayedQuestion] = useState('');
    useEffect(() => {
        const timeout = setTimeout(()=> {
            setDelayedQuestion(enteredQuestion);
        } , 1000);
        return () => clearTimeout(timeout);
    }, [enteredQuestion]);

    // function enterVoiceQuestionHandler(event) {
    //     setEnteredQuestion(event.target.value);
    // }
    return (
        <>
           <div className={styles.FarmerPage}>

         <div className={styles.LoginPlaceholder}>
<p className={styles.FProfile}> Logged in as: <p className={styles.FName}>Shadman Shafeen</p> </p>

         </div>
            <Header />
            <SearchBar enteredQuestion={enteredQuestion} setEnteredQuestion={setEnteredQuestion} />
            <RelevantQuestionList enteredQuestion={delayedQuestion}/>
            <PrevQuestionList />
            <LogOutButton/> 
            <BackgroundStyle/>
            <AnimatedText/>
            </div>
        </>
    )
}

export default FarmerHome