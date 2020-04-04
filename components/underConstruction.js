const UnderConstruction = () => {
  return (
    <>
      <section className="underConstruction">
        <h1>Under Construction</h1>
        <h2>But you can look at cute hamster swing</h2>
        <h3>Look at him go</h3>
        <img src="https://media.tenor.com/images/58234767de8965275bebbbc707ae403b/tenor.gif"></img>
      </section>
      <style jsx>{`
        .underConstruction {
          margin: 10%;
          font-family: "Merriweather Sans", sans-serif;
          line-height: 1.8rem;
          min-height: 200px;
        }
        img {
          margin: 10%;
        }
        h2 {
          font-size: 1rem;
        }
        h3 {
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};

export default UnderConstruction;
