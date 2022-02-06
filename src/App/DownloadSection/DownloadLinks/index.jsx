import { useInputContext } from '../contexts/InputContext'
import styles from './styles.module.scss'


export function DownloadLinks(){

    const {downloadLinks} = useInputContext()
    const {link} = downloadLinks

    const lowResLink = link["243"][0]
    const mediumResLink = link["244"][0]
    const highResLink = link["22"][0]

    const thumb = downloadLinks["thumb"]

    let title = downloadLinks["cleantitle"]
    title = title.replaceAll("_", " ")

    return(
        <div className={styles.downloadLink}>
            <h2>Enjoy!</h2>

            <div>
                <img src={thumb} alt={title} />
                
                <div>
                    <a href={lowResLink}>
                        <button>360P</button>
                    </a>

                    <a href={mediumResLink}>
                        <button>480P</button>
                    </a>

                    <a href={highResLink}>
                        <button>720P</button>
                    </a>
                </div>

            </div>

            <p>
                {title}
            </p>
        </div>
    )
}