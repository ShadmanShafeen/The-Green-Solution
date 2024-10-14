import styles from './ToggleLanguage.module.css'
import { useTranslation } from 'react-i18next';

const ToggleLanguage= () =>
{ 
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en');
    }
    return(
        <>
       <div className={styles.Background}>
        <label className={styles.toggle} onClick={toggleLanguage}>
                        <input type="checkbox" checked={i18n.language ==='bn'} readOnly/>
                        <span className={styles.slider}></span>
                        <span className={styles.labels} data-on={t('toggleLanguage')} data-off="English"></span>
                      </label>
        </div>
        </>
    )
}


export default ToggleLanguage