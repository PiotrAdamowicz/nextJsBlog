import Layout from "../components/layout";
import poohImg from "../img/pooh.jpg";

const Index = () => (
  <>
    <Layout>
      <main>
        <h1>Hello Jacob</h1>
        <img src={poohImg}></img>
      </main>
    </Layout>
    <style jsx>
      {`
        main {
          height: 70%;
        }
      `}
    </style>
  </>
);

export default Index;
