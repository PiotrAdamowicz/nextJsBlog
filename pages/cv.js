import Layout from "../components/layout";
import colors from "../Utils/colors";
import image from "../img/PiotrAdamowiczSquare.png";

const Cv = () => {
  return (
    <Layout>
      <div id="page-wrap">
        <div className="pic_container">
          <div className="pic_background">
            <img src={image} alt="Photo of Piotr Adamowicz" id="pic" />
          </div>
        </div>

        <div id="contact-info" className="vcard">
          <h1 className="fn">Piotr Adamowicz</h1>
          <h2>Junior Front-end Developer</h2>

          <p>
            Cell: <span className="tel">506-586-928</span>
            <br />
            Email:{" "}
            <a className="email" href="adamowicz.piotr2@gmail.com">
              adamowicz.piotr2@gmail.com
            </a>
          </p>
        </div>

        <div id="objective">
          <p>
            I am an outgoing and energetic (ask anybody) young professional,
            seeking a career that fits my professional skills, personality, and
            murderous tendencies. My squid-like head is a masterful problem
            solver and inspires fear in who gaze upon it. I can bring world
            domination to your organization.
          </p>
        </div>

        <div className="clear"></div>

        <dl>
          <dd className="clear"></dd>

          <dt>Education</dt>
          <dd>
            <h2>
              “Od podstaw do pierwszej pracy jako Front-End Developer”,
              Bartłomiej Borowczyk
            </h2>
            <h3>2018 - 2019</h3>
            <p>
              Series of courses on Udemy platform at the moment covered basics
              of:HTML5, CSS3, JavaScript, React js, Node.js.
            </p>
          </dd>

          <dd className="clear"></dd>

          <dd>
            <h2>
              Management at Department of Management and Marketing, Białystok
            </h2>
            <h3>2010 - 2013</h3>
            <p>
              Curriculum included basics of Economy, Management, Marketing.
              Unfinished first degree.
            </p>
          </dd>

          <dd className="clear"></dd>

          <dd>
            <h2>
              Information Technology at Department of Faculty of Computer
              Science, ​Białystok
            </h2>
            <h3>2009</h3>
            <p>
              Basic knowledge of computer technologies. Curriculum included
              basics of C/C++ programing language, basics of binary numbers and
              higher mathematics. Unfinished first semester.
            </p>
          </dd>

          <dd className="clear"></dd>

          <dd>
            <h2>VII high school, ​Białystok</h2>
            <h3>2006 - 2009</h3>
            <p>
              I’ve graduated in 2009 from Mathematics and Informatics profile.
            </p>
          </dd>

          <dd className="clear"></dd>

          <dt>Skills</dt>
          <dd>
            <h2>Technologies</h2>
            <h3>Sufficient skill</h3>
            <p>
              I've used those technologies and I'm abel to navigate them freely.
            </p>
            <ul>
              <li>
                <p className="skill">HTML</p>
              </li>
              <li>
                <p className="skill">CSS</p>
              </li>
              <li>
                <p className="skill">Java Script</p>
              </li>
              <li>
                <p className="skill">React</p>
              </li>
              <li>
                <p className="skill">Git and Github</p>
              </li>
              <li>
                <p className="skill">Responsive Web Design</p>
              </li>
            </ul>
            <ul>
              <h3>Sufficient skill</h3>
              <p>
                I've had contact with those technologies and used them in
                educational manner.
              </p>
              <li>
                <p className="skill">Windows Comand Line Interface</p>
              </li>
              <li>
                <p className="skill">Next js</p>
              </li>
              <li>
                <p className="skill">Gatsby js</p>
              </li>
              <li>
                <p className="skill">relational databes (MySql)</p>
              </li>
              <li>
                <p className="skill">non relational databes (MongoDB)</p>
              </li>
              <li>
                <p className="skill">GraphQl</p>
              </li>
              <li>
                <p className="skill">Bootstrap 4</p>
              </li>
            </ul>
          </dd>

          <dd className="clear"></dd>

          <dt>Experience</dt>
          <dd>
            <h2>
              SP MSWIA <span>paramedic - Białystok 02.2019 – PRESENT</span>
            </h2>
            <p>
              My main line of work is: transport of patients, medical samples,
              lab results and supplies. I work at Geriatrics ward.
            </p>

            <h2>
              MEDASSIST SP Z O O{" "}
              <span>paramedic - Białystok 04.2016 – 01.2019</span>
            </h2>
            <p>
              My main line of work was: transport of patients, medical samples,
              lab results and supplies. I’ve worked at Children's Hospital
              Emergency ward.
            </p>
          </dd>

          <dd className="clear"></dd>

          <dt>Hobbies</dt>
          <dd>
            In-line skating, music, reading (s-f urban fantasy), origami,
            one-pot cooking .
          </dd>

          <dd className="clear"></dd>

          <dt>Links</dt>
          <dd>
            <a href="http://github.com/PiotrAdamowicz">
              github.com/PiotrAdamowi cz
            </a>
            <a href="https://www.facebook.com/piotr.adamowicz.927">
              https://www.facebook.com/piotr.adamowicz.927
            </a>
          </dd>

          <dd className="clear"></dd>
        </dl>

        <div className="clear"></div>
      </div>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          h1,
          h2 {
            font-family: "Oswald", sans-serif;
            font-weight: bold;
            color: ${colors.fontLarge};
          }
          h3 {
            color: ${colors.fontMedium};
          }
          p {
            font-family: "Oswald", sans-serif;
            color: ${colors.fontSmall};
          }
          ul {
            list-style: initial;
          }
          .pic_container {
            position: relative;
            height: 100%;
            width: 100%;
          }
          .pic_background {
            margin: 5% auto;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background-color: ${colors.main_op};
          }
          img {
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 270px;
            border-radius: 47%;
          }

          @media (min-width: 1024px) {
            body {
              font: 16px Helvetica, Sans-Serif;
              line-height: 24px;
              background: url(images/noise.jpg);
            }
            .clear {
              clear: both;
            }
            #page-wrap {
              width: 800px;
              margin: 40px auto 60px;
            }
            .pic_container {
              position: absolute;
              right: 10%;
              top: 20%;
            }
            h1 {
              margin: 0 0 16px 0;
              padding: 0 0 16px 0;
              font-size: 42px;
              font-weight: bold;
              letter-spacing: -2px;
              border-bottom: 1px solid #999;
            }
            h2 {
              font-size: 20px;
              margin: 0 0 6px 0;
              position: relative;
            }
            h2 span {
              position: absolute;
              bottom: 0;
              right: 0;
              font-style: italic;
              font-family: Georgia, Serif;
              font-size: 16px;
              color: #999;
              font-weight: normal;
            }
            p {
              margin: 0 0 16px 0;
            }
            a {
              color: #999;
              text-decoration: none;
              border-bottom: 1px dotted #999;
            }
            a:hover {
              border-bottom-style: solid;
              color: black;
            }
            ul {
              margin: 0 0 32px 17px;
            }
            #objective {
              width: 500px;
              float: left;
            }
            #objective p {
              font-family: Georgia, Serif;
              font-style: italic;
              color: #666;
            }
            dt {
              font-style: italic;
              font-weight: bold;
              font-size: 18px;
              text-align: right;
              padding: 0 26px 0 0;
              width: 150px;
              float: left;
              height: 100px;
              border-right: 1px solid #999;
            }
            dd {
              width: 600px;
              float: right;
            }
            dd.clear {
              float: none;
              margin: 0;
              height: 15px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Cv;
// TODO: I t hink this will be easyer with grid layout
