import { Phone } from "interfaces/phone.interface";
import styles from "./index.module.scss";
interface SingleGadgetProps {
    data: Phone,
}

export function SingleGadget({ data }: SingleGadgetProps) {
    return (
        <div className={styles.singleGadget}>
            <div className={styles.grade}>
                {data.grade}
            </div>
            <div className={styles.photoContainer}>
                <div className={styles.gadgetPhoto}>
                    <img src={data.imgUrl} alt={data.name}/>
                </div>
            </div>
            <div className={styles.gadgetName}>
                {data.name}
            </div>
            <div className={styles.gadgetStorage}>
                {data.carrier} | {data.storage}
            </div>
            <div className={styles.unitPrice}>
                Unit price
            </div>
            <div className={styles.gadgetPrice}>
                ${parseFloat(data.amount)}
            </div>
            <div>
                {data.quantity} Available
            </div>
            <div className={styles.button}>
                <button>
                    Buy
                </button>
            </div>

        </div>
    )
}