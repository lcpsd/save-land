import { useState } from 'react'
import { InputLink } from './InputLink'
import { Loading } from './Loading'
import styles from './styles.module.scss'

export function DownloadSection(){

    const [loading, setLoading] = useState(false)

    return(
        <section className={styles.downloadSection}>
            <div className={styles.container}>
                
                {loading && <Loading/>}

            </div>
        </section>
    )
}