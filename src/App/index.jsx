import { DownloadSection } from './DownloadSection'
import { InputContextProvider } from './DownloadSection/contexts/InputContext'
import { Header } from './Header'
import styles from './styles.module.scss'

export default function app(){
  return(
    <div className={styles.app}>
      <Header />
      
      <InputContextProvider>
        <DownloadSection/>
      </InputContextProvider>
    </div>
  )
}