import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
    return (
        <div className={styles.footer__links}>
            {links.map((link) => (
                <ul>
                    <b>{link.heading}</b>
                    {link.links.map((link) => (
                        <li>
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}

const links = [
    {
        heading: "My T-shirt Land",
        links: [
            {
                name: "About us",
                link: "",
            },
            {
                name: "Contact us",
                link: "",
            },
            {
                name: "Social responsibility",
                link: "",
            },
            {
                name: "",
                link: "",
            },
        ],
    },
    {
        heading: "HELP & SUPPORT",
        links: [
            {
                name: "Shipping info",
                link: "",
            },
            {
                name: "Returns",
                link: "",
            },
            {
                name: "How to order",
                link: "",
            },
            {
                name: "How to track",
                link: "",
            },
            {
                name: "Size guide",
                link: "",
            },
        ],
    },
    {
        heading: "Customer service",
        links: [
            {
                name: "Customer service",
                link: "",
            },
            {
                name: "Terms & conditions",
                link: "",
            },
            {
                name: "Consumers (Transactions)",
                link: "",
            },
            {
                name: "Take our feedback survey",
                link: "",
            },
        ],
    },
];
