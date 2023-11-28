import AgronomistAccountCreateForm from "../components/AgronomistAccountCreateForm"
import BackgroundStyle from "../components/BackgroundStyle"
import AACFooter from "../components/AACFooter"
import styles from "./AgronomistAccountCreationPage.module.css"

function AgronomistAccountCreationPage() {
    return (
        <>
          <div className={styles.BgScrolloff}>
          <AgronomistAccountCreateForm />
          <BackgroundStyle/>
          <AACFooter/>
          </div>
        </>
    )
}

export default AgronomistAccountCreationPage