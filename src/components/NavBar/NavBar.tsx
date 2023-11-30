import ButtonTheme from "../ButtonTheme/ButtonTheme";
import Button from "../button/Button";
import NavBarLink from "./NavBarLink";
import { Logo, NavBarStyled } from "./StyledComponents";

const singIn = () => {
  console.log("Sing in")
};

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <div style={{ display: "flex" }}>
          <NavBarLink to="/home" name="Home" />
          <NavBarLink to="/stream" name="Stream" />
          <NavBarLink to="/party" name="Party" />
          <NavBarLink to="/premium" name="Premium" />
        </div>
        <Logo>Gamor</Logo>

        <div style={{ display: "flex", alignItems:"center" }}>
          <ButtonTheme/>
          <Button text="Sing in" variant="text" onClick={() => singIn()} />
          <Button text="Create account" variant="rounded" onClick={() => singIn()} />
        </div>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
