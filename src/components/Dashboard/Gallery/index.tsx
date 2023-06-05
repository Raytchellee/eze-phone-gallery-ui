import { SideBar } from "./SideBar/index";
import { Gadgets } from "./Gadgets/index";
import styles from "./index.module.scss";

export function Gallery(){
    return (
        <div className={styles.gallery}>
            <SideBar />
            <Gadgets />
        </div>
    )
}