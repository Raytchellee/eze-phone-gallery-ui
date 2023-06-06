import styles from "./index.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { SearchTermAtom } from "states";
import { useActions } from "actions/fetch-phones.action";
import { toast } from "react-hot-toast";
import { LoadingAtom } from "states";
import { useEffect } from "react";

export function Header() {
  const [searchTerm, setSearchTerm] = useRecoilState(SearchTermAtom);
  const [loading] = useRecoilState(LoadingAtom);
  const { fetchPhones } = useActions();
  useEffect(() => {
    if (loading) {
        toast.loading("fetching phones...", {id: "ray"});
    }else {
        toast.dismiss("ray");
    }
  }, [loading])

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.title}>
          Shop our latest <br />
          available stock here
        </div>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Enter search term (e.g iPhone x, 128GB or A1)"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button onClick={fetchPhones}>
            Search <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.imgBox} />
      </div>
    </div>
  );
}
