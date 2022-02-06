import { useState } from 'react'
import { DownloadLink } from './DownloadLink'
import { InputLink } from './InputLink'
import { Loading } from './Loading'
import styles from './styles.module.scss'

export function DownloadSection(){

    const [loading, setLoading] = useState(false)
    const [links, setLinks] = useState("a")

    return(
        <section className={styles.downloadSection}>
            <div className={styles.container}>
                {(!loading && !links) && <InputLink/>}
                {loading && <Loading/>}
                <DownloadLink/>
            </div>
        </section>
    )
}