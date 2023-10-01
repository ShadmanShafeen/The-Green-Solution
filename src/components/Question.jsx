import styles from './Question.module.css'

function Question({ farmer , question }) {
    return (
        <div className={styles.question_container}>
            <ul className={styles.question_elements}>
                <li className={styles.question}><p>{question}</p></li>
                <li className={styles.farmer}><h1>{farmer}</h1></li>                
            </ul>
        </div>

    )
}

export default Question