import Layout from "../components/layout";
import styles from "../styles/cv.module.scss";
import Meta from "../components/meta";
import imageSmall from "../img/PiotrAdamowiczSquare.png";
import imageMedium from "../img/piotradamowiczMedium.png";

const Cv = () => {
  return (
    <>
      <Meta />
      <main className={styles.page_wrap}>
        <div className={styles.pic_container}>
          <div className={styles.pic_background}>
            <picture>
              <source
                className={styles.pic}
                media="(min-width: 650px)"
                srcSet={imageMedium}
              />
              <img
                className={styles.pic}
                src={imageSmall}
                alt="Piotr Adamowicz"
              />
            </picture>
          </div>
        </div>

        <div className={styles.contact_info}>
          <h1 className={styles.fn}>Piotr Adamowicz</h1>
          <h2 className={styles.position}>Junior Front-end Developer</h2>

          <p className={styles.paragraph}>
            Cell:{" "}
            <span className={styles.phone_email} className={styles.tel}>
              506-586-928
            </span>
            <br />
            <span className={styles.phone_email}>
              Email:{" "}
              <a className={styles.email} href="adamowicz.piotr2@gmail.com">
                adamowicz.piotr2[at]gmail.com
              </a>
            </span>
          </p>
        </div>

        <div className={styles.objective}>
          <p className={styles.paragraph}>
            I am an outgoing and energetic developer, seeking a career in IT
            industry. My focus of interest include front-end technologies as
            well as surounding back-end, database and designe topics.
          </p>
        </div>
        <section className={styles.education}>
          <h3 className={styles.section_header}>EDUCATION</h3>
          <h4 className={styles.school}>VII high school, Białystok</h4>
          <p className={styles.paragraph} className={styles.duration}>
            2006_2009
          </p>
          <p className={styles.paragraph} className={styles.details}>
            I’ve graduated in 2009 from mathematics and Informatics profile.
          </p>
          <h4 className={styles.school}>
            Information Technology at Department of Faculty of Computer Science,
            Białystok
          </h4>
          <p className={styles.paragraph} className={styles.duration}>
            2009
          </p>
          <p className={styles.paragraph} className={styles.details}>
            Basic knowledge of computer technologies. Curriculum included basics
            of C/C++ programing language, basics of binary numbers and higher
            mathematics. Unfinished first semester.
          </p>
          <h4 className={styles.school}>
            Management at Department of Management and Marketing, Białystok
          </h4>
          <p className={styles.paragraph} className={styles.duration}>
            2010_2013
          </p>
          <p className={styles.paragraph} className={styles.details}>
            Curriculum included basics of Economy, Management, Marketing .
            Unfinished first degree.
          </p>
          <h4 className={styles.school}>
            “Od podstaw do pierwszej pracy jako Front-End Developer”, Bartłomiej
            Borowczyk
          </h4>
          <p className={styles.paragraph} className={styles.duration}>
            2018_2019
          </p>
          <p className={styles.paragraph} className={styles.details}>
            Series of courses on Udemy platform at the moment covered basics of:
            HTML5, CSS3, JavaScript, React js, Node.js.
          </p>
        </section>
        <section className={styles.experience}>
          <h3>EXPERIENCE</h3>
          <h4 className={styles.school}>SP MSWIA, Białystok – paramedic</h4>
          <p className={styles.paragraph} className={styles.duration}>
            02.2019 – PRESENT
          </p>
          <p className={styles.paragraph} className={styles.details}>
            My main line of work is: transport of patients, medical samples, lab
            results and supplies. I work at Geriatrics ward.
          </p>
          <h4 className={styles.school}>
            MEDASSIST SP Z O O, Białystok – paramedic
          </h4>
          <p className={styles.paragraph} className={styles.duration}>
            04.2016 – 01.2019
          </p>
          <p className={styles.paragraph} className={styles.details}>
            My main line of work was: transport of patients, medical samples,
            lab results and supplies. I’ve worked at Children's Hospital
            Emergency ward.
          </p>
        </section>
        <section className={styles.skills}>
          <h3>SKILLS</h3>
          <ul className={styles.list}>
            <li className={styles.list_elemetn}>
              <picture>
                <source
                  media="(min-width: 800px)"
                  srcSet="https://www.freepik.com/free-icon/responsive-design_752749.html"
                />
                <img />
              </picture>
              -HTML
            </li>
            <li className={styles.list_elemetn}>-CSS</li>
            <li className={styles.list_elemetn}>-JavaScript</li>
            <li className={styles.list_elemetn}>-GraphQl</li>
            <li className={styles.list_elemetn}>-React</li>
            <li className={styles.list_elemetn}>-Git</li>
            <li className={styles.list_elemetn}>-RWD</li>
            <li className={styles.list_elemetn}>-Bootstrap</li>
          </ul>
        </section>
        <section className={styles.languages}>
          <h3>LANGUAGES</h3>
          <p className={styles.paragraph} className={styles.detail}>
            Communicative english in speech and writing, level B2.
          </p>
        </section>
        <section className={styles.links}>
          <h3>LINKS</h3>
          <a href="https://github.com/PiotrAdamowicz">
            github.com/PiotrAdamowicz
          </a>
          <br />
          <a href="https://www.facebook.com/piotr.adamowicz.927">
            facebook.com/piotr.adamowicz.927
          </a>
        </section>
        <section className={styles.interest}>
          <h3>INTERESTS</h3>
          <p className={styles.paragraph}>
            In-line skating, music, reading (s-f urban fantasy), origami,
            one-pot cooking.
          </p>
        </section>
      </main>
    </>
  );
};

export default Cv;
