import { useInputContext } from '../contexts/InputContext'
import {MdOutlineContentCopy} from 'react-icons/md'
import styles from './styles.module.scss'
import { ToastContainer, toast } from 'react-toastify';

export function DownloadLinks(){

    const {downloadLinks} = useInputContext()
    const {link} = downloadLinks

    const lowResLink = link?.["243"]?.[0]
    const mediumResLink = link?.["244"]?.[0]
    const highResLink = link?.["22"]?.[0]
    const ultraResLink = link?.["137"]?.[0]

    const thumb = downloadLinks["thumb"]

    let title = downloadLinks["cleantitle"]
    title = title.replaceAll("_", " ")

    const notify = (message) => toast.info(message)

    function handleCopyLink(link){
        navigator.clipboard.writeText(link)

        notify("Link Copied.")
    }

    return(
        <>
            <ToastContainer/>
            <div className={styles.downloadLink}>
                <h2>Enjoy!</h2>

                <div>
                    <img src={thumb} alt={title} />
                    
                    <div>
                        <button onClick={() => handleCopyLink(lowResLink)}>
                            360P
                            <span>
                                <MdOutlineContentCopy/>
                            </span>
                        </button>
                        {
                            mediumResLink && 
                            <button onClick={() => handleCopyLink(mediumResLink)}>
                                480P
                                <span>
                                    <MdOutlineContentCopy/>
                                </span>
                            </button>
                            }

                        {
                            highResLink &&
                            <button onClick={() => handleCopyLink(highResLink)}>
                                720P
                                <span>
                                    <MdOutlineContentCopy/>
                                </span>
                            </button>
                        }

                        { 
                            ultraResLink &&
                            <button  onClick={() => handleCopyLink(highResLink)}>
                                1080P
                                <p>No Audio</p>
                                <span>
                                    <MdOutlineContentCopy/>
                                </span>
                            </button>
                        }
                    </div>

                </div>

                <p>
                    {title}
                </p>
            </div>
        </>
    )
}