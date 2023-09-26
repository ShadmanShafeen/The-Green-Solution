import Answer from './Answer'
import styles from './AnswerList.module.css'

function AnswerList () {
    return (
        <div className={styles.all_answer_container}>
            <h2 className={styles.top_answers}>Top Answers</h2>
            <br /> <br /> <br />
                <ul className={styles.answer_containers}>
                    <Answer 
                    answer= "Farm like this, Farm like that"
                    agronomist= "Agri Shitol" />
                    
                    <Answer 
                    answer= "Farm like this, Farm like that"
                    agronomist= "Agri Shitol" />
                </ul>
            
        </div>
    )
}

export default AnswerList