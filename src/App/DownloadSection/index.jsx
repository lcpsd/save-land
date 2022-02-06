import { InputLink } from './InputLink'
import styles from './styles.module.scss'

export function DownloadSection(){

    
    return(
        <section className={styles.downloadSection}>
            <div className={styles.container}>
                <InputLink/>
            </div>
        </section>
    )
}