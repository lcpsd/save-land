import { DownloadSection } from './DownloadSection'
import { Header } from './Header'
import styles from './styles.module.scss'

export default function app(){
  return(
    <div className={styles.app}>
      <Header />
      <DownloadSection/>
    </div>
  )
}