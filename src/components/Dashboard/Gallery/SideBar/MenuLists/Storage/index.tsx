import styles from "../index.module.scss";
import { useRecoilState } from "recoil";
import { StorageAtom } from "../../../../../../states";
import { STORAGE } from "../../../../../../enums";
import { convertEnumToArray } from "../../../../../../utils";

export function Storage() {
  const [storage, setStorage] = useRecoilState(StorageAtom);
  const allStorage = convertEnumToArray(STORAGE);

  function addItem(item: STORAGE): void {
    setStorage((prevStorage) => {
      return prevStorage.includes(item) ? prevStorage : [...prevStorage, item];
    });
  }

  function removeItem(item: STORAGE): void {
    setStorage((prevStorage) => {
      return prevStorage.filter(value => value !== item);
    });
  }

  return (
    <div>
      Storage
      <div className={styles.storage}>
        {allStorage.map((item, index) => (
          <div key={index}>
            <label htmlFor={item}>
              <input
                type="checkbox"
                onClick={() => {
                  storage.includes(item) ? 
                    removeItem(item) : addItem(item);
                }}
              />
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
