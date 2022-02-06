import { useEffect } from 'react'
import { useInputContext } from '../contexts/InputContext'
import styles from './styles.module.scss'


export function DownloadLinks(){

    const {downloadLinks} = useInputContext()
    const {link} = downloadLinks

    let lowResLink = link["243"][0]
    let mediumResLink = link["244"][0]
    let highResLink = link["22"][0]

    console.log(link)

    return(
        <div className={styles.downloadLink}>
            <h2>Enjoy!</h2>

            <div>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FcXAuoN1Cn5w%2Fmaxresdefault.jpg" alt="" />
                
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
        </div>
    )
}