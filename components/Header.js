import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header>
        <NavBar> </NavBar>
      </header>
      <style jsx>{`
        header {
          height: 100;
        }
      `}</style>
    </>
  );
};

export default Header;
