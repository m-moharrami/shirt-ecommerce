import styles from "./styles.module.scss";
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Socials() {
    return (
        <div className={styles.footer__socials}>
            <section>
                <h3>STAY CONNECTED</h3>
                <ul>
                    <li>
                        <a href="/" target="_blank">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <FaTiktok />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
