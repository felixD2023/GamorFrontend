//styled-components
import { styled } from "styled-components";

export const Link = styled.div`
  color: ${({ theme }) => theme.notSelected};
  height: 25px;
  padding: 0px 15px;
  font-size: small;
`;

export const LinkActive = styled.div`
  position: relative;
  color: ${({ theme }) => theme.selected};
  font-size: small;
`;
export const LinkActiveDecorator = styled.div`
  border: 1px solid #000;
  height: 22px;
  width: 80%;
  padding: 0px 15px;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.selected};
  position: absolute;
  transform: rotate(165deg);
  right: -9px;
  top: -5px;
`;

export const BlankSpaceLinkActiveDecorator = styled.div`
  width: 30px;
  height: 10px;
  position: absolute;
  background-color: ${({theme})=>theme.background1};
  top: -8px;
  left: -2px;
`;

export const NavBarStyled = styled.nav`
padding:50px 100px;
height:30px;
display:flex;
justify-content: space-between;
`;

export const Logo = styled.div`
  color:${({theme})=>theme.text};
  font-size: large;
  font-weight: 600;
`