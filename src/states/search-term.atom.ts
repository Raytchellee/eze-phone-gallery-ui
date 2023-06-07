import { atom } from "recoil";

export const SearchTermAtom = atom<string>({
    key: "searchTermAtom",
    default: ""
});