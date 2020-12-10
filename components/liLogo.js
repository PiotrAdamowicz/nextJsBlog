import styles from "../styles/cv.module.scss";

const LiLogo = (props) => {
  const { skill, source, size = [31, 32] } = props;
  return (
    <li className={styles.list_element}>
      <spam className={styles.skill}>{skill}</spam>
      <img
        className={styles.element_logo}
        src={source}
        width={size[0]}
        height={size[1]}
        alt={skill}
        title={skill}
      />
    </li>
  );
};

export default LiLogo;
