import { atom } from "recoil";

export const SearchTermAtom = atom<string>({
    key: "searchTerm",
    default: ""
});