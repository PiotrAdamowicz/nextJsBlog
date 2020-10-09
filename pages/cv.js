import Layout from "../components/layout";
import colors from "../Utils/colors";
import imageSmall from "../img/PiotrAdamowiczSquare.png";
import imageMedium from "../img/piotradamowiczMedium.png";

const Cv = () => {
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
              <img
                className="pic"
                src={imageSmall}
                alt="Photo of Piotr Adamowicz"
              />
            </picture>
          </div>
        </div>

        <div className="contact-info">
          <h1 className="fn">Piotr Adamowicz</h1>
          <h2>Junior Front-end Developer</h2>

          <p>
            Cell: <span className="tel">506-586-928</span>
            <br />
            <span>
              Email:{" "}
              <a className="email" href="adamowicz.piotr2@gmail.com">
                adamowicz.piotr2[at]gmail.com
              </a>
            </span>
          </p>
        </div>

        <div className="objective">
          <p>
            I am an outgoing and energetic developer, seeking a career in IT
            industry. My focus of interest include front-end technologies as
            well as surounding back-end, database and designe topics.
          </p>
        </div>
        <section className="education">
          <h3>EDUCATION</h3>
          <h4>VII high school, Białystok</h4>
          <p className="duration">2006 - 2009</p>
          <p className="details">
            I’ve graduated in 2009 from mathematics and Informatics profile.
          </p>
          <h4>
            Information Technology at Department of Faculty of Computer Science,
            Białystok
          </h4>
          <p className="duration">2009</p>
          <p className="details">
            Basic knowledge of computer technologies. Curriculum included basics
            of C/C++ programing language, basics of binary numbers and higher
            mathematics. Unfinished first semester.
          </p>
          <h4>
            Management at Department of Management and Marketing, Białystok
          </h4>
          <p className="duration">2010 - 2013</p>
          <p className="details">
            Curriculum included basics of Economy, Management, Marketing .
            Unfinished first degree.
          </p>
          <h4>
            “Od podstaw do pierwszej pracy jako Front-End Developer”, Bartłomiej
            Borowczyk
          </h4>
          <p className="duration">2018 - 2019</p>
          <p className="details">
            Series of courses on Udemy platform at the moment covered basics of:
            HTML5, CSS3, JavaScript, React js, Node.js.
          </p>
        </section>
        <section className="experience">
          <h3>EXPERIENCE</h3>
          <h4>SP MSWIA, Białystok – paramedic</h4>
          <p className="duration">02.2019 – PRESENT</p>
          <p className="details">
            My main line of work is: transport of patients, medical samples, lab
            results and supplies. I work at Geriatrics ward.
          </p>
          <h4>MEDASSIST SP Z O O, Białystok – paramedic</h4>
          <p className="duration">04.2016 – 01.2019</p>
          <p className="details">
            My main line of work was: transport of patients, medical samples,
            lab results and supplies. I’ve worked at Children's Hospital
            Emergency ward.
          </p>
        </section>
        <section className="skills">
          <h3>SKILLS</h3>
          <ul>
            <li>
              <picture>
                <source
                  media="(min-width: 800px)"
                  srcSet="https://www.freepik.com/free-icon/responsive-design_752749.html"
                />
                <img />
              </picture>
              -HTML
            </li>
            <li>-CSS</li>
            <li>-JavaScript</li>
            <li>-GraphQl</li>
            <li>-React</li>
            <li>-Git</li>
            <li>-RWD</li>
            <li>-Bootstrap</li>
          </ul>
        </section>
        <section className="languages">
          <h3>LANGUAGES</h3>
          <p className="details">
            Communicative english in speech and writing, level B2.
          </p>
        </section>
        <section className="links">
          <h3>LINKS</h3>
          <a href="https://github.com/PiotrAdamowicz">
            github.com/PiotrAdamowicz
          </a>
          <br />
          <a href="https://www.facebook.com/piotr.adamowicz.927">
            facebook.com/piotr.adamowicz.927
          </a>
        </section>
        <section className="interest">
          <h3>INTERESTS</h3>
          <p className="details">
            In-line skating, music, reading (s-f urban fantasy), origami,
            one-pot cooking.
          </p>
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
