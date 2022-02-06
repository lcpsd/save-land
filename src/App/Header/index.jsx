import styles from './styles.module.scss'
import logo from 'src/public/images/logo.png'

export function Header(){

    return(
        <header className={styles.header}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </header>
    )
}