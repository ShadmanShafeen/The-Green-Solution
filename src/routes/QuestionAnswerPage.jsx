import AnswerList from "../components/AnswerList";
import Header from "../components/Header";
import Question from "../components/Question";

function QuestionAnswerPage({question , farmer}) {
    return (
        <>
            <Header />
            <Question question={question} farmer={farmer}/>
            <AnswerList />
        </>
    )
}
export default QuestionAnswerPage