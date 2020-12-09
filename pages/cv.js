import Layout from "../components/layout";
import Meta from "../components/meta";
import styles from "../styles/cv.module.scss";
import textCV from "../Utils/textContent/cv/textCV";
import Picture from "../components/picture";

const Cv = () => {
  const {
    contactInfo: { name, position, address, phone, email },
    objective,
    education: {
      school1: { school1, schoolDuration1, educationDetails1 },
      school2: { school2, schoolDuration2, educationDetails2 },
      school3: { school3, schoolDuration3, educationDetails3 },
      school4: { school4, schoolDuration4, educationDetails4 },
      school5: { school5, schoolDuration5, educationDetails5 },
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
            Cell:{" "}
            <span className={styles.phone_email} className={styles.tel}>
              {phone}
            </span>
            <br />
            <span className={styles.phone_email}>
              Email:{" "}
              <a className={styles.email} href="adamowicz.piotr2@gmail.com">
                {email}
              </a>
            </span>
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
            <li className={styles.list_element}>
              <spam className={styles.skill}>{skills[0]}</spam>

              <a href="http://www.w3.org/html/logo/">
                <img
                  className={styles.element_logo}
                  src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                  width="63"
                  height="64"
                  alt="HTML5 Powered"
                  title="HTML5 Powered"
                />
              </a>
            </li>
            <li className={styles.list_element}>{skills[1]}</li>
            <li className={styles.list_element}>{skills[2]}</li>
            <li className={styles.list_element}>{skills[3]}</li>
            <li className={styles.list_element}>{skills[4]}</li>
            <li className={styles.list_element}>{skills[5]}</li>
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
    </>
  );
};

export default Cv;
