import styles from "./index.module.scss";
import { Categories } from "./Categories/index";
import { PriceFilter } from "./PriceFilter/index";
import { Storage } from "./Storage/index";

export function MenuLists(){
    return (
        <div className={styles.menuLists}>
            <Categories />
            <PriceFilter />
            <Storage />
        </div>
    )
}
