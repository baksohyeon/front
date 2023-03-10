import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://dorito-dev.tistory.com">Tistory</a>
        </li>
        <li className={styles.navItem}>|</li>
        <li className={styles.navItem}>
          <a href="https://github.com/baksohyeon">Dorito GitHub</a>
        </li>
        <li className={styles.navItem}>|</li>
        <li className={styles.navItem}>
          <a href="https://dorito.netlify.app/">Dorito PKM</a>
        </li>
      </ul>
    </footer>
  );
}
