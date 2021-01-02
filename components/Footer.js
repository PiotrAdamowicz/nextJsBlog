import Link from "next/link";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>Made by Piotr Adamowicz from Next.js docs</p>
        <div>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>
        </div>
      </footer>
      <style jsx>{``}</style>
    </>
  );
};

export default Footer;
