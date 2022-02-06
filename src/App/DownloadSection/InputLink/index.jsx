import downloadIcon from "src/public/images/downloadIcon.png"
import styles from "./styles.module.scss"

export function InputLink(){

    return(
        <div className={styles.inputLink}>
            <input type="text" />
            <button>
                <img src={downloadIcon} alt="" />
            </button>
        </div>
    )
}