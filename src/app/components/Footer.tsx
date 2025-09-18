import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <a
            href="https://github.com/modernkd"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kd-davis"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            LinkedIn
          </a>
          <a
            href="https://kd.works"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            kd.works
          </a>
        </div>
        <p className={styles.footerCopyright}>
          © {new Date().getFullYear()} kd davis
        </p>
      </div>
    </footer>
  );
}
