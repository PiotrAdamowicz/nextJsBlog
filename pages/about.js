import Layout from "../components/layout";
import styles from "../styles/about.module.scss";
import UnderConstruction from "../components/underConstruction";

export default function About() {
  return (
    <Layout>
      <div>
        <h2 className={styles.header}>This is the about page</h2>
        <UnderConstruction />
      </div>
    </Layout>
  );
}
