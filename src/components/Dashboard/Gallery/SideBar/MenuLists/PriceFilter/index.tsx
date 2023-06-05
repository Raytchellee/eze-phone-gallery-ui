import styles from "../index.module.scss";
import { useRecoilState } from "recoil";
import { MaxPriceAtom, MinPriceAtom } from "../../../../../../states";
import { ChangeEvent } from "react";

export function PriceFilter() {
    const [minPrice, setMinPrice] = useRecoilState(MinPriceAtom);
    const [maxPrice, setMaxPrice] = useRecoilState(MaxPriceAtom);

    function handleMinChange(event: ChangeEvent<HTMLInputElement>){
        const min = parseFloat(event.target.value);
        if (min >= maxPrice) return;
        setMinPrice(min);
    }

    function handleMaxChange(event: ChangeEvent<HTMLInputElement>){
        const max = parseFloat(event.target.value);
        if (max <= minPrice) return;
        setMaxPrice(max);
    }

    return (
        <div>
            Price Filter
            <div className={styles.pricefilter}>
                <div className={styles.sliders_control}>
                    <input 
                        id={styles.fromSlider}
                        type="range"
                        value={minPrice}
                        min="0"
                        max="1500"
                        onChange={handleMinChange}
                    />
                    <input
                        id={styles.toSlider}
                        type="range"
                        value={maxPrice}
                        min="0"
                        max="1500"
                        onChange={handleMaxChange}
                    />
                </div>
                <div className={styles.form_control}>
                    <div className={styles.form_control_container}>
                        <input
                            className={styles.form_control_container_input}
                            type="number" 
                            id={styles.fromInput}
                            value={minPrice}
                            min="0"
                            max="1000"
                            onChange={handleMinChange}
                        />
                    </div>
                    <div className={styles.form_control_separator}>
                        |
                    </div>
                    <div className={styles.form_control_container}>
                        <input
                            className={styles.form_control_container_input}
                            type="number"
                            id={styles.toInput}
                            value={maxPrice}
                            min="0"
                            max="1000"
                            onChange={handleMaxChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}