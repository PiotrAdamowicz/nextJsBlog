import Layout from "../components/layout";
import colors from "../Utils/colors";
import textCV from "../Utils/textContent/cv/textCV";
import imageSmall from "../img/PiotrAdamowiczSquare.png";
import imageMedium from "../img/piotradamowiczMedium.png";

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
  } = textCV;
  return (
    <Layout>
      <main className="page-wrap">
        <div className="pic_container">
          <div className="pic_background">
            <picture>
              <source
                className="pic"
                media="(min-width: 650px)"
                srcSet={imageMedium}
              />
              <img className="pic" src={imageSmall} alt={"Photo of " + name} />
            </picture>
          </div>
        </div>

        <div className="contact-info">
          <h1 className="fn">{name}</h1>
          <h2>{position}</h2>

          <p>
            <span className="address">{address}</span> <br></br>
            Cell: <span className="phone">{phone}</span>
            <br />
            <span>
              Email:{" "}
              <a className="email" href={email}>
                {email}
              </a>
            </span>
          </p>
        </div>

        <div className="objective">
          <p>{objective}</p>
        </div>
        <section className="education">
          <h3>EDUCATION</h3>
          <h4>{school5}</h4>
          <p className="duration">{schoolDuration5}</p>
          <p className="details">{educationDetails5}</p>
          <h4>{school4}</h4>
          <p className="duration">{schoolDuration4}</p>
          <p className="details">{educationDetails4}</p>
          <h4>{school3}</h4>
          <p className="duration">{schoolDuration3}</p>
          <p className="details">{educationDetails3}</p>
          <h4>{school2}</h4>
          <p className="duration">{schoolDuration2}</p>
          <p className="details">{educationDetails2}</p>
          <h4>{school1}</h4>
          <p className="duration">{schoolDuration1}</p>
          <p className="details">{educationDetails1}</p>
        </section>
        <section className="experience">
          <h3>EXPERIENCE</h3>
          <h4>{jobName2}</h4>
          <p className="duration">{jobDuration2}</p>
          <p className="details">{jobDetails2}</p>
          <h4>{jobName1}</h4>
          <p className="duration">{jobDuration1}</p>
          <p className="details">{jobDetails1}</p>
        </section>
        <section className="skills">
          <h3>SKILLS</h3>
          <ul>
            {skills.map((skill) => (
              <li className={skill}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="languages">
          <h3>LANGUAGES</h3>
          <p className="details">{english}</p>
          <p className="details">{javaScript}</p>
        </section>
        <section className="links">
          <h3>LINKS</h3>
          <a href={link1}>{linkName1}</a>
          <br />
          <a href={link2}>{linkName2}</a>
        </section>
        <section className="interest">
          <h3>INTERESTS</h3>
          <p className="details">{interests}</p>
        </section>
      </main>
      <style jsx>{`
        * {
          word-wrap: break-word;
        }
        .email {
          color: ${colors.fontSmall};
        }
        h1,
        h3 {
          color: ${colors.fontLarge};
          font-weight: bold;
        }
        h2,
        h4 {
          color: ${colors.fontMedium};
        }
        span,
        p,
        ul {
          color: ${colors.fontSmall};
          list-style-type: none;
        }

        p {
          margin: 2% 5%;
        }

        .page-wrap {
          width: 100%;
          padding: 8%;
          display: grid;
          grid-template-columns: 55% 35%;
          justify-content: stretch;
          grid-row-gap: 15px;
          grid-template-areas:
            "pic pic"
            "contact contact"
            "objective objective"
            "education education"
            "experience experience"
            "languages skills"
            "links skills"
            "interest interest";
        }

        .pic_container {
          display: flex;
          justify-content: center;
          grid-area: pic;
        }
        .pic_background {
          width: 200px;
          height: 200px;
          background-color: ${colors.main_op};
          border-radius: 50px;
          overflow: hidden;
          position: relative;
        }
        .pic {
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%);
          height: 180px;
          width: 180px;
        }
        .contact-info {
          grid-area: contact;
        }
        .objective {
          grid-area: objective;
        }
        .education {
          grid-area: education;
        }
        .experience {
          grid-area: experience;
        }
        .skills {
          grid-area: skills;
          justify-self: center;
        }
        .languages {
          grid-area: languages;
          align-self: center;
        }
        .links {
          grid-area: links;
        }
        .links a {
          font-size: 0.9rem;
        }
        .interest {
          grid-area: interest;
        }
        @media (min-width: 650px) {
          .page-wrap {
            grid-template-columns: 50% 40%;
            grid-template-areas:
              "contact pic"
              "contact pic"
              "objective pic"
              "education education"
              "experience experience"
              "languages skills"
              "links skills"
              "interest interest";
          }
          .pic_container {
            display: flex;
            width: 130%;
            height: 100%;
            justify-content: center;
            grid-area: pic;
          }
          .pic_background {
            height: 280px;
            width: 220px;
            background-color: ${colors.main_op};
            border-radius: 50px;
            position: relative;
          }
          .pic {
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            width: 100%;
            height: 100%;
          }
          .languages {
            margin: 2% 10%;
          }
          .links {
            margin: 2% 10%;
          }
        }
        @media (min-width: 800px) {
          .page-wrap {
            padding: 10%;
            grid-template-columns: 70% 20%;
            grid-template-areas:
              "contact pic"
              "contact pic"
              "objective pic"
              "education skills"
              "education languages"
              "experience links"
              "experience interest";
          }
        }
      `}</style>
    </Layout>
  );
};

export default Cv;
