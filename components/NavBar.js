import Link from "next/link";
import styles from "../styles/navbar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.link}>Portfolio</a>
        </Link>
        <Link href="/cv">
          <a className={styles.link}>Resume</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </nav>
      <style jsx>{``}</style>
    </>
  );
};

export default NavBar;
