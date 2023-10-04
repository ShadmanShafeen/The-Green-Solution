import AnswerList from "../components/AnswerList";
import Header from "../components/Header";
import Question from "../components/Question";

function QuestionAnswerPage({ enteredQuestion }) {
    return (
        <>
            <Header />
            <Question enteredQuestion={enteredQuestion}/>
            <AnswerList />
          
        </>
    )
}
export default QuestionAnswerPage