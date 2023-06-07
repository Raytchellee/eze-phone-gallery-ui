import { atom } from "recoil";
import { STORAGE } from "../enums"

export const StorageAtom = atom<STORAGE[]>({
    key: "storageAtom",
    default: [],
});