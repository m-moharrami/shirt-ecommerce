import styles from "./styles.module.scss";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { menuArray } from "../../../data/home";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    <a className={styles.menu__header}>
                        <BiCategory />
                        <b>Categories</b>
                    </a>
                </li>
                <div className={styles.menu__list}>
                    {menuArray.map((item) => (
                        <Link href={item.link} legacyBehavior>
                            <a>
                                <span>{item.name}</span>
                            </a>
                        </Link>
                    ))}
                </div>
            </ul>
        </div>
    );
}
