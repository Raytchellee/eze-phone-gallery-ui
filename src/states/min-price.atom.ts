import { atom } from "recoil";

export const MinPriceAtom = atom<number>({
    key: "minPrice",
    default: 100,
});