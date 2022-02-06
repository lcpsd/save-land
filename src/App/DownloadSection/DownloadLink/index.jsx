import styles from './styles.module.scss'


export function DownloadLink({videoData}){

    return(
        <div className={styles.downloadLink}>
            <h2>Enjoy!</h2>

            <div>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FcXAuoN1Cn5w%2Fmaxresdefault.jpg" alt="" />
                
                <div>
                    <a href="http://">
                        <button>480P</button>
                    </a>

                    <a href="http://">
                        <button>720P</button>
                    </a>

                    <a href="http://">
                        <button>1080P</button>
                    </a>
                </div>
            </div>

        </div>
    )
}