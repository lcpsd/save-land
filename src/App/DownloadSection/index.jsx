import { useState } from 'react'
import { InputLink } from './InputLink'
import { Loading } from './Loading'
import styles from './styles.module.scss'

export function DownloadSection(){

    const [loading, setLoading] = useState(true)
    const [links, setLinks] = useState(null)

    return(
        <section className={styles.downloadSection}>
            <div className={styles.container}>
                {(!loading && !links) && <InputLink/>}
                {loading && <Loading/>}

            </div>
        </section>
    )
}