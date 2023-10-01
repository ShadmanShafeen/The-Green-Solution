import styles from './Question.module.css'
import ToggleButton from "../components/ToggleButton"
import LogOutButton from "../components/LogOutButton" 

function Question({ farmer , question }) {
    return (
        <>
          <div className={styles.question_container}>
              <ul className={styles.question_elements}>
                  <li className={styles.question}><p>{question}</p></li>
                  <li className={styles.farmer}><h1>{farmer}</h1></li>                
              </ul>
          </div>
          <ToggleButton/>
          <LogOutButton/>
        </>

    )
}

export default Question