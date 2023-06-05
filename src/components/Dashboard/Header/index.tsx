import styles from "./index.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

export function Header(){
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.title}>
                    Shop our latest <br />available stock here
                </div>
                <div className={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Enter search term (e.g iPhone x, 128GB or A1)"
                    />
                    <button>Search <AiOutlineArrowRight /></button>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.imgBox} />
            </div>
        </div>
    )
}

