import Header from "../components/Header";
import ToggleButton from "../components/ToggleButton";
import LogOutButton from "../components/LogOutButton";
import AgronomistQnAList from "../components/AgronomistQnAList";


function AgronomistHome() {
    return (<>
    <Header/>
       <ToggleButton/>
       <LogOutButton/>
       <AgronomistQnAList />
    </>
        

    );
}

export default AgronomistHome