import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Button from "../button/Button";
import NavBarLink from "./NavBarLink";
import { LoggedUserContainer, Logo, NavBarStyled } from "./StyledComponents";
import { useNavigate } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { logout } from "../../Redux/loggedUserSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const loggedUser = useSelector(
    (state: RootState) => state.loggedUser.loggedUser
  );
  const dispatch = useDispatch();

  const singIn = () => {
    navigate("/login");
  };

  const Logout = () => {
    dispatch(logout());
  };

  return (
    <>
      <NavBarStyled>
        <div style={{ display: "flex" }}>
          <NavBarLink to="/" name="Home" />
          <NavBarLink to="/stream" name="Stream" />
          <NavBarLink to="/party" name="Party" />
          <NavBarLink to="/premium" name="Premium" />
        </div>
        <Logo>Gamor</Logo>

        <div style={{ display: "flex", alignItems: "center" }}>
          <SwitchTheme />
          {loggedUser ? (
            <>
              <Button text="Logout" variant="text" onClick={() => Logout()} />
              <LoggedUserContainer>
                <strong>{loggedUser.username.charAt(0).toUpperCase()}</strong>
              </LoggedUserContainer>
            </>
          ) : (
            <>
              <Button text="Sing in" variant="text" onClick={() => singIn()} />
              <Button text="Create account" variant="rounded" color="black" />
            </>
          )}
        </div>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
