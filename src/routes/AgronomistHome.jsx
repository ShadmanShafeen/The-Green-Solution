import Header from "../components/Header";
import ToggleButton from "../components/ToggleButton";
import LogOutButton from "../components/LogOutButton";
import AgronomistQnAList from "../components/AgronomistQnAList";
import BackgroundStyle from "../components/BackgroundStyle";
function AgronomistHome() {
    return (<>
    <Header/>
       <ToggleButton/>
       <LogOutButton/>
       <AgronomistQnAList />
       <BackgroundStyle/>
    </>
        

    );
}

export default AgronomistHome