import styles from "./styles.module.scss";
import Top from "./Top";
import Main from "./Main";

export default function Header() {
    return (
        <header className={styles.header}>
            <Top />
            <Main />
        </header>
    );
}
