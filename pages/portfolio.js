import Layout from "../components/layout";
import TRAimg from "../img/TRA1080x640.png";
import VTDImg from "../img/vueTodo1080x640.png";
import Project from "../components/Project/Project";
import styles from "../styles/portfolio.module.scss";
import text from "../Utils/textContent/portfolio/textPortfolio";

const { TRA, VTD } = text.projects;

const Portfolio = () => {
  const projects = [
    {
      img: {
        src: TRAimg,
        alt: TRA.alt,
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: TRA.link,
      project: TRA.title,
      text: TRA.text,
    },
    {
      img: {
        src: VTDImg,
        alt: VTD.alt,
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: VTD.link,
      project: VTD.title,
      text: VTD.text,
    },
    {
      img: {
        src: TRAimg,
        alt: "recruitment task for TRA webpage",
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: "https://piotradamowicz.github.io/Prograffing-task/",
      project: "TRA Landing Page",
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo adcommodi quas sed soluta cum nisi, debitis neque sapiente assumenda.",
    },
    {
      img: {
        src: TRAimg,
        alt: "recruitment task for TRA webpage",
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: "https://piotradamowicz.github.io/Prograffing-task/",
      project: "TRA Landing Page",
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo adcommodi quas sed soluta cum nisi, debitis neque sapiente assumenda.",
    },
    {
      img: {
        src: TRAimg,
        alt: "recruitment task for TRA webpage",
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: "https://piotradamowicz.github.io/Prograffing-task/",
      project: "TRA Landing Page",
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo adcommodi quas sed soluta cum nisi, debitis neque sapiente assumenda.",
    },
    {
      img: {
        src: TRAimg,
        alt: "recruitment task for TRA webpage",
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: "https://piotradamowicz.github.io/Prograffing-task/",
      project: "TRA Landing Page",
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo adcommodi quas sed soluta cum nisi, debitis neque sapiente assumenda.",
    },
    {
      img: {
        src: TRAimg,
        alt: "recruitment task for TRA webpage",
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: "https://piotradamowicz.github.io/Prograffing-task/",
      project: "TRA Landing Page",
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo adcommodi quas sed soluta cum nisi, debitis neque sapiente assumenda.",
    },
    {
      img: {
        src: TRAimg,
        alt: "recruitment task for TRA webpage",
        width: 1086 / 2,
        height: 610 / 2,
      },
      link: "https://piotradamowicz.github.io/Prograffing-task/",
      project: "TRA Landing Page",
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo adcommodi quas sed soluta cum nisi, debitis neque sapiente assumenda.",
    },
  ];
  return (
    <>
      <Layout px="5">
        <ul className={styles.projectsList}>
          {projects.map((project, id) => (
            <Project data={project} key={id} />
          ))}
        </ul>
      </Layout>
      <style jsx>{``}</style>
    </>
  );
};

export default Portfolio;
