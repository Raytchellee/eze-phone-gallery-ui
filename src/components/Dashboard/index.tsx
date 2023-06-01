import { Header } from "./Header/index";
import { Gallery } from "./Gallery/index";
import styles from "./index.module.scss";

export function Dashboard(){
    return (
        <div className={styles.container}>
            <Header />
            <Gallery />
        </div>
    )
}