import { atom } from "recoil";

export const MinPriceAtom = atom<number>({
    key: "minPriceAtom",
    default: 100,
});