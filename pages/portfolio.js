import Layout from "../components/layout";
import UnderConstruction from "../components/underConstruction";

const Portfolio = () => {
  return (
    <Layout>
      <ul>
        <li>
          <h2>Tic Tac Toe</h2>
          <p className="description">
            Tic tac toe game made on the beginning of my learning journey, using
            plain JS.
          </p>
          <a href="https://piotradamowicz.github.io/TicTacToe/">TicTacToe</a>
        </li>
      </ul>
    </Layout>
  );
};

export default Portfolio;
