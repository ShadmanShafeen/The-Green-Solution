import PrevQuestion from './PrevQuestion'
import styles from './PrevQuestionList.module.css'

function PrevQuestionList()
{
 return (
        <>
          <div className={styles.prevquestion_container}>
              <p className={styles.prevquestion_header}> Previous Questions you have asked</p> 
                  <ul>
                      <PrevQuestion question="Farm How" />
                  </ul>
          </div>        
        </>
 )
}
export default PrevQuestionList
