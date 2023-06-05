import { atom } from "recoil";

export const MaxPriceAtom = atom<number>({
    key: "maxPrice",
    default: 1000,
});