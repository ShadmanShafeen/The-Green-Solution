import AnswerList from "../components/AnswerList";
import Header from "../components/Header";
import Question from "../components/Question";

function QuestionAnswerPage({ farmer , question }) {
    return (
        <>
            <Header />
            <Question  farmer={farmer} question={question}/>
            <AnswerList />
          
        </>
    )
}
export default QuestionAnswerPage