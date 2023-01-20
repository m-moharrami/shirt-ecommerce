import Link from "next/link";
import styles from "./styles.module.scss";

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                {/* From next.js 13 on: "Link" counts as "a". So it doesn't accept "a" as its child, that's why I used "legacyBehavior" */}
                <Link href="/" legacyBehavior>
                    <a className={styles.logo}></a>
                </Link>
            </div>
        </div>
    );
}
