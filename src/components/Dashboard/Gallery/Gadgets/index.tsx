import styles from "./index.module.scss";

export function Gadgets(){
    return (
        <div className={styles.gadgets}>
            <SingleGadget />
        </div>
    )
}

function SingleGadget() {
    return (
        <div className={styles.singleGadget}>
            <div className={styles.grade}>
                A1
            </div>
            <div className={styles.photoContainer}>
                <div className={styles.gadgetPhoto}>
                    {/* <img src="../../../../images/iphone.jpg" alt="iPhone"/> */}
                </div>
            </div>
            <div className={styles.gadgetName}>
                iPhone 11
            </div>
            <div className={styles.gadgetStorage}>
                Unlocked | 256GB
            </div>
            <div className={styles.unitPrice}>
                Unit price
            </div>
            <div className={styles.gadgetPrice}>
                $450
            </div>
            <div>
                1500 Available
            </div>
            <div className={styles.button}>
                <button>
                    Buy
                </button>
            </div>

        </div>
    )
}