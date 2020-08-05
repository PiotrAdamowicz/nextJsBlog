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
            padding: 7% 5%;
            background-color: ${color.main};
            display: flex;
            justify-content: center;
            height: 12%;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Header;
