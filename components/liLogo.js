import styles from "../styles/cv.module.scss";

const LiLogo = (props) => {
  const { skill, source, title } = props;
  return (
    <li className={styles.list_element}>
      <spam className={styles.skill}>{skill}</spam>
      <img
        className={styles.element_logo}
        src={source}
        width="63"
        height="64"
        alt={skill}
        title={skill}
      />
    </li>
  );
};

export default LiLogo;
