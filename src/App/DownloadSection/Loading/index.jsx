import styles from './styles.module.scss'

export function Loading(){

    return(
        <div className={styles.loading}>
            <span>
                Processing ...
            </span>
        </div>
    )
}