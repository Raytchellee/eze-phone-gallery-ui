import { useRecoilValue } from "recoil";
import styles from "./index.module.scss";
import { SingleGadget } from "./single-gadget";
import { PhonesAtom } from "states";


export function Gadgets(){
    const phones = useRecoilValue(PhonesAtom)
    return (
        <div className={styles.gadgets}>
            {phones.map((phone, index) => (
                <SingleGadget key={phone.id + index} data={phone} />
            ))}
        </div>
    )
}

