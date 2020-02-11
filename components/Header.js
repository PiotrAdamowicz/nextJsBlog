import NavBar from "./NavBar";
import color from "../Utils/colors";

const Header = () => {
  return (
    <>
      <header>
        <NavBar> </NavBar>
      </header>
      <style jsx>
        {`
          header {
            padding: 20px 5px;
            background-color: ${color.main};
            height: 15%;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Header;
