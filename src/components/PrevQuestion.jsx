import { Link } from 'react-router-dom';
import styles from './PrevQuestion.module.css'

function PrevQuestion({questionID ,  question }) {
    function handlePrevQuestionClick() {
        console.log(questionID);
        
    }
    return (
        <>
            <li onClick={handlePrevQuestionClick} className={styles.prevquestion_box}>
                <p className={styles.prevquestion_text}>{ question }</p>
            </li>
        </>
    )
}

export default PrevQuestion