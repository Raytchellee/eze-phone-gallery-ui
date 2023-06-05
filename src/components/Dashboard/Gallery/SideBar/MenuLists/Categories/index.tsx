import styles from "../index.module.scss";
import { useRecoilState } from "recoil";
import { CategoriesAtom } from "../../../../../../states";
import { CATEGORIES } from "../../../../../../enums";
import { convertEnumToArray } from "../../../../../../utils";

export function Categories() {
    const [categories, setCategories] = useRecoilState(CategoriesAtom);
    const allCategories = convertEnumToArray(CATEGORIES);

    return (
        <div>
            Categories
            <div  className={styles.categories}>
                {allCategories.map((category, index) => (
                    <div 
                        key={index}
                        onClick={() => setCategories(category)}
                        className={categories === category ? styles.selected : ""}
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
    )
}