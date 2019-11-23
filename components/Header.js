import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header>
        <NavBar> </NavBar>
      </header>
      <style>
        {`
          header{
            margin: 20px;
            padding: 20px;
            border: 1px solid #DDD;
            background-color: black;
          }
      `}
      </style>
    </>
  );
};

export default Header;
