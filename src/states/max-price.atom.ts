import { atom } from "recoil";

export const MaxPriceAtom = atom<number>({
    key: "maxPriceAtom",
    default: 1000,
});