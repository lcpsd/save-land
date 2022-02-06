import { useInputContext } from './contexts/InputContext'
import { DownloadLinks } from './DownloadLinks'
import { InputLink } from './InputLink'
import { Loading } from './Loading'
import styles from './styles.module.scss'

export function DownloadSection(){

    const {loading, downloadLinks} = useInputContext()

    return(
        <section className={styles.downloadSection}>
            <div className={styles.container}>

                {(!loading && !downloadLinks) && <InputLink/>}

                {loading && <Loading/>}

                {(!loading && downloadLinks) && <DownloadLinks/>}

            </div>
        </section>
    )
}