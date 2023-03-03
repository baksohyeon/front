import Link from "next/link";
import { GoogleButton } from "./google-login";
import styles from "./header.module.css";

export default function Header() {
  const callApi = async () => {};
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <GoogleButton />
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/public">Public</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
