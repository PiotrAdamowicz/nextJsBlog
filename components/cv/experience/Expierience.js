import React from "react";
import textCV from "../../../Utils/textContent/cv/textCV";
import styles from "../../../styles/cv.module.scss";

function Expierience() {
  const {
    experience: {
      job1: { jobName1, jobDuration1, jobDetails1 },
      job2: { jobName2, jobDuration2, jobDetails2 },
      job3: { jobName3, jobDuration3, jobDetails3 },
    },
  } = textCV;
  return (
    <>
      <section className={styles.experience}>
        <div className="section_wrapper">
          <h3 className={styles.section_header__bg}>EXPERIENCE</h3>
          <h4 className={styles.companyName}>{jobName3}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {jobDuration3}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {jobDetails3}
          </p>
          <h4 className={styles.companyName}>{jobName2}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {jobDuration2}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {jobDetails2}
          </p>
          <h4 className={styles.companyName}>{jobName1}</h4>
          <p className={styles.paragraph} className={styles.duration}>
            {jobDuration1}
          </p>
          <p className={styles.paragraph} className={styles.details}>
            {jobDetails1}
          </p>
        </div>
      </section>
    </>
  );
}

export default Expierience;
