import styles from "./index.module.scss";
import { MenuLists } from "./MenuLists";

export function SideBar(){
    return (
        <div className={styles.sidebar}>
            <MenuLists />
        </div>
    )
}