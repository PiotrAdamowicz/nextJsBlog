import Meta from "../components/meta";
import styles from "../styles/cv.module.scss";
import textCV from "../Utils/textContent/cv/textCV";
import Picture from "../components/picture";
import LiLogo from "../components/liLogo";
import { GIT, NEXT, RWD, HTML, CSS, JS, RC } from "../Utils/scripts/imports";

const Cv = () => {
  const {
    contactInfo: { name, position, address, phone, email },
    objective,
    education: {
      school1: { school1, schoolDuration1, educationDetails1 },
      school2: { school2, schoolDuration2, educationDetails2 },
      school3: { school3, schoolDuration3, educationDetails3 },
      school4: { school4, schoolDuration4, educationDetails4 },
    },
    experience: {
      job1: { jobName1, jobDuration1, jobDetails1 },
      job2: { jobName2, jobDuration2, jobDetails2 },
    },
    skills,
    languages: { english, javaScript },
    links: {
      link1: { link1, linkName1 },
      link2: { link2, linkName2 },
    },
    interests,
  } = textCV; //detructuring text data

  return (
    <>
      <Meta />
      <main className={styles.page_wrap}>
        <Picture></Picture>
        <div className={styles.contact_info}>
          <h1 className={styles.fn}>{name}</h1>
          <h2 className={styles.position}>{position}</h2>

          <p className={styles.paragraph}>
            <div>Cell: </div>
            <div className={styles.phone_email} className={styles.tel}>
              {phone}
            </div>
          </p>
          <p className={styles.paragraph}>
            <div className={styles.email}>Email: </div>
            <a className={styles.email} href="adamowicz.piotr2@gmail.com">
              {email}
            </a>
          </p>
        </div>

        <div className={styles.objective}>
          <p>{objective}</p>
        </div>

        <section className={styles.education}>
          <h3 className={styles.section_header}>EDUCATION</h3>
          <h4 className={styles.school}>{school1}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {schoolDuration1}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {educationDetails1}
          </p>
          <h4 className={styles.school}>{school2}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {schoolDuration2}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {educationDetails2}
          </p>
          <h4 className={styles.school}>{school3}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {schoolDuration3}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {educationDetails3}
          </p>
          <h4 className={styles.school}>{school4}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {schoolDuration4}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {educationDetails4}
          </p>
        </section>
        <section className={styles.experience}>
          <h3 className={styles.section_header__bg}>EXPERIENCE</h3>
          <h4>{jobName2}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {jobDuration2}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {jobDetails2}
          </p>
          <h4>{jobName1}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {jobDuration1}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {jobDetails1}
          </p>
        </section>
        <section className={styles.skills}>
          <h3 className={styles.section_header__bg}>SKILLS</h3>
          <ul className={styles.list}>
            <LiLogo skill={skills[0]} source={HTML} />
            <LiLogo skill={skills[1]} source={CSS} />
            <LiLogo skill={skills[2]} source={JS} size={[31 * 1.3, 32 * 1.3]} />
            <LiLogo skill={skills[3]} source={RC} />
            <LiLogo skill={skills[4]} source={GIT} />
            <LiLogo skill={skills[5]} source={RWD} />
            <LiLogo skill={skills[6]} source={NEXT} size={[62, 42]} />
          </ul>
        </section>
        <section className={styles.languages}>
          <h3 className={styles.section_header__bg}>LANGUAGES</h3>
          <p className={styles.paragraph} className={styles.detail}>
            {english}
          </p>
          <br />
          <p>{javaScript}</p>
        </section>
        <section className={styles.links}>
          <h3 className={styles.section_header__bg}>LINKS</h3>
          <a className={styles.link} target="new tab" href={link1}>
            {linkName1}
          </a>
          <br />
          <a href={link2}>{linkName2}</a>
        </section>
        <section className={styles.interest}>
          <h3 className={styles.section_header__bg}>INTERESTS</h3>

          <ul className={styles.list}>
            <li className={styles.list_element}>{interests[0]}</li>
            <li className={styles.list_element}>{interests[1]}</li>
            <li className={styles.list_element}>{interests[2]}</li>
            <li className={styles.list_element}>{interests[3]}</li>
            <li className={styles.list_element}>{interests[4]}</li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          <span>and</span>{" "}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{" "}
        </div>
        <div>
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          <br />
          <a href="https://icons8.com/icons">Icons by Icons8</a>
        </div>
      </footer>
    </>
  );
};

export default Cv;
