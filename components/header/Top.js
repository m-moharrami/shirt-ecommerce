import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDownFill } from "react-icons/ri";

export default function Top() {
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li>
                        <img
                            src="https://www.seekpng.com/png/detail/790-7900846_iran-flag-round-medium-iran-flag-circle-png.png"
                            alt="Iran Flag Round Medium - Iran Flag Circle Png@seekpng.com"
                        />
                        <span>Iran / Rial</span>
                    </li>
                    <li>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <span>Customer Service</span>
                    </li>
                    <li>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart />
                        <a href="/profile/wishlist">
                            <span>Wishlist</span>
                        </a>
                    </li>
                    <li>
                        <div className={styles.flex}>
                            <RiAccountPinCircleLine />
                            <span>Account</span>
                            <RiArrowDownFill />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
