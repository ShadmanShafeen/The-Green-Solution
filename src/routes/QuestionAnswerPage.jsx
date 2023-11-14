import AnswerList from "../components/AnswerList";
import styles from "./QuestionAnswerPage.module.css";
import Header from "../components/Header";
import Question from "../components/Question";
import BackgroundStyle from "../components/BackgroundStyle";
function QuestionAnswerPage() {
    return (
        <>
            <Header />
            <Question />
            <AnswerList />
            <BackgroundStyle />
          
        </>
    )
}
export default QuestionAnswerPage