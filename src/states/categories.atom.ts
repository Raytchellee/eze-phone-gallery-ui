import { atom } from "recoil";
import { CATEGORIES } from "../enums"

export const CategoriesAtom = atom<CATEGORIES>({
    key: "categoriesAtom",
    default: CATEGORIES.ALL,
});