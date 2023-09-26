import styles from './Question.module.css'

function Question() {
    return (
        <div className={styles.question_container}>
            <ul className={styles.question_elements}>
                <li className={styles.question}><p>Farm How</p></li>
                <li className={styles.questioner}><h1>Shitil</h1></li>
                
            </ul>
        </div>

    )
}

export default Question