import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p className={`nojs-show ${loading ? styles.loading : styles.loaded}`}>
          {
            <>
              <span className={styles.notSignedInText}>
                If you want to sign in, please click the 'sign in' button
              </span>
              <a
                href={`http://localhost:3001/api/auth/google/login`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Sign in
              </a>
            </>
          }
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/public">Public</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">API</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
