import { Link } from 'react-router-dom';
import styles from './PrevQuestion.module.css'

function PrevQuestion({questionID ,  question, count }) {

    function handlePrevQuestionClick() {
        console.log(questionID);
        localStorage.setItem('questionID',JSON.stringify(questionID))
    }
    return (
        <>
            <Link to='/QuestionPage' style={{textDecoration : 'none'}}>
                <li onClick={handlePrevQuestionClick} className={styles.prevquestion_box}>
                
                    <span className={styles.badge}>{count}</span>
  
                    <p className={styles.prevquestion_text}>{ question }</p>
                </li>
            </Link>
        </>
    )
}

export default PrevQuestion