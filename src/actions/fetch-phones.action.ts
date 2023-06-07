import { useRecoilState, useRecoilValue } from "recoil";
import { useCallback } from "react";
import { CATEGORIES } from "../enums";
import { Phone } from "../interfaces/phone.interface";
import { toast } from "react-hot-toast";
import {
  StorageAtom,
  SearchTermAtom,
  MinPriceAtom,
  MaxPriceAtom,
  CategoriesAtom,
  PhonesAtom,
  LoadingAtom,
} from "../states";

export function useActions() {
    const storage = useRecoilValue(StorageAtom);
    const searchTerm = useRecoilValue(SearchTermAtom);
    const minimumPrice = useRecoilValue(MinPriceAtom);
    const maximumPrice = useRecoilValue(MaxPriceAtom);
    const categories = useRecoilValue(CategoriesAtom);
    const [phones, setPhones] = useRecoilState(PhonesAtom);
    const [loading, setLoading] = useRecoilState(LoadingAtom);

    const fetchPhones = useCallback(async () => {
        if (loading) return;
        const baseUrl = "https://api-dev.ezewholesale.com/ims/v2/inventories/prices/list?page=1&take=50";
        setLoading(true);

        return await new Promise((resolve, reject) => {
            const categoryQuery = categories === CATEGORIES.MACBOOK
            ? "&category=Laptops"
            : "&category=Cell+Phones";
            const searchQuery = searchTerm ? `&searchTerm=${searchTerm}` : '';
            // const brandQuery = categories === CATEGORIES.ALL ? '&brand=Apple,Samsung,Google' : `&brand=${categories}`;
            // const brandQuery = '&brand=Apple,Samsung,Google';
            const brandQuery = categories === CATEGORIES.IPHONE || categories === CATEGORIES.MACBOOK
            ? "&brand=Apple"
            : categories === CATEGORIES.ALL
            ? "&brand=Apple,Samsung,Google"
            : `&brand=${categories}`;
            const fetchedPhones: Phone[] = [];

            fetch(`${baseUrl}${categoryQuery}${searchQuery}${brandQuery}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    if (response.data) {
                        for (const datum of response.data.data) {
                            for (const item of datum.data) {
                                const fetchedPhone: Phone = {
                                    id: item.id,
                                    quantity: item.quantity,
                                    grade: item.properties.grade,
                                    carrier: item.properties.carrier,
                                    storage: item.properties.storage,
                                    name: datum.name,
                                    imgUrl: datum.imgUrl,
                                    amount: item.amount,
                                }
                                fetchedPhones.push(fetchedPhone);
                            }
                        }
                        setPhones(fetchedPhones);
                        setLoading(false);
                        resolve(true);
                    } else {
                        toast.error("An error occurred while fetching data");
                        setLoading(false);
                        resolve(false);
                    }
                }).catch(err => {
                    setLoading(false);
                    toast.error(err.message);
                    resolve(false);
                })
        })
    }, [searchTerm, categories])

    return {fetchPhones}
}
