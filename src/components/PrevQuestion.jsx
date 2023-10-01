import styles from './PrevQuestion.module.css'

function PrevQuestion({ question }) {
    return (
        <>
            <li className={styles.prevquestion_box}>
                <p className={styles.prevquestion_text}>{ question }</p>
            </li>
        </>
    )
}

export default PrevQuestion