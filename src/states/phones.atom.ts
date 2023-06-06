import { atom } from "recoil";
import { Phone } from "../interfaces/phone.interface";

export const PhonesAtom = atom<Phone[]>({
    key: "phones",
    default: [],
});