import axios from "axios"
import downloadIcon from "src/public/images/downloadIcon.png"
import { useInputContext } from "../contexts/InputContext"
import styles from "./styles.module.scss"

export function InputLink(){

    const {link, setLink, setDownloadLinks, setLoading} = useInputContext()

    async function handleDownloadLink(){

        setLoading(true)

        let videoId = link.split("v=")[1]
        videoId = videoId.split("&t")[0]

        const options = {
            method: 'GET',
            url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
            params: {id: videoId, geo: 'EN'},
            headers: {
              'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com',
              'x-rapidapi-key': 'e424863840mshaec05b3ea60d76ep1f6e5ajsn24df3e2ee49e'
            }
        }
        
        const response = await axios.request(options)
        setDownloadLinks(response.data);

        setLoading(false)
    }

    return(
        <div className={styles.inputLink}>
            <input 
            type="text"
            onChange={e => setLink(e.target.value)}
            value={link}
            />
            <button onClick={handleDownloadLink}>
                <img src={downloadIcon} alt="" />
            </button>
            
        </div>
    )
}