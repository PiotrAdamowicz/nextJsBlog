import imageSmall from "../img/PiotrAdamowiczSquare.png";
import imageMedium from "../img/piotradamowiczMedium.png";
import styles from "../styles/picture.module.scss";

const Picture = () => {
  return (
    <picture className={styles.pic_container}>
      <source
        className={styles.pic}
        media="(min-width: 650px)"
        srcSet={imageMedium}
      />
      <img className={styles.pic} src={imageSmall} alt="Piotr Adamowicz" />
    </picture>
  );
};
export default Picture;
