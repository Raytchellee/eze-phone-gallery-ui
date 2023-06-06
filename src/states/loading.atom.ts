import { atom } from "recoil";

export const LoadingAtom = atom<boolean>({
    key: "loading",
    default: false,
});