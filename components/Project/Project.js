import Image from "next/image";
import styles from "./project.module.scss";

export default function Project(props) {
  const { link, project, text } = props.data;
  return (
    <>
      <li className={styles.project}>
        <div className={styles.project__imgWrapper}>
          <Image {...props.data.img} />
        </div>
        <h3 className={styles.project__link}>
          <a href={link} target="_blank">
            {project}
          </a>
        </h3>
        <p className={styles.project__description}>{text}</p>
      </li>
    </>
  );
}
