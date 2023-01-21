import Link from "next/link";
import { RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

export default function Main() {
    const { cart } = useSelector((state) => ({ ...state }));
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                {/* From next.js 13 on: "Link" counts as "a". So it doesn't accept "a" as its child, that's why I used "legacyBehavior" */}
                <a href="/" className={styles.logo}>
                    <img src="https://www.seekpng.com/png/detail/15-158716_free-download-rectangle-png.png" />
                </a>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                    <div className={styles.search__icon}>
                        <RiSearch2Line />
                    </div>
                </div>
                <Link href="/cart" legacyBehavior>
                    <a className={styles.cart}>
                        <RiShoppingCartLine />
                        <span>{cart.length}</span>
                    </a>
                </Link>
            </div>
        </div>
    );
}
