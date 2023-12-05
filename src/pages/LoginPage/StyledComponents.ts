import { styled } from "styled-components";

export const LoginStyled = styled.div`
  height: 81.8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 12px;
  background-color: red;
  display: flex;
  box-shadow: 0px 0px 34px 7px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.selected};
  border: 2px solid lineal-gradient(red, blue);

  transition: 0.4s background-color ease-in;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 400px;
`;
export const HeaderLogin = styled.div`
  height: 30px;
  width: 100%;
  font-size: 30px;
  display: flex;
  aligns-items: center;
  justify-content: center;
  margin-top: 20px;
  color: rgb(255, 255, 255);
`;

export const InputsText = styled.input`
  height: 40px;
  width: 230px;
  border-radius: 2em;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.selected};
  font-size: 20px;
  font-weight: bold;
  border: none;
  padding: 0px 15px;
  box-shadow: 33px 15px 39px -5px rgba(0, 0, 0, 0.3);

  &:focus {
    outline-color: ${({ theme }) => theme.highlight};
    outline-style: solid;
    outline-width: 3px;
  }

  transition: 0.4s color ease-in;
`;

export const VisibilityPasswordButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  font-size:20px;
  top:10px;
  right:10px;
  cursor:pointer;

  &:active{
    transform:scale(0.95);
  }
`;

export const Button = styled.div`
width:100px;
height:50px;
border-radius:2em;
color: ${({theme})=>theme.selected};
background-color: rgb(255, 255, 255);
display:flex;
justify-content:center;
align-items:center;
font-size: 20px;
box-shadow: 20px 10px 39px 0px rgba(0, 0, 0, 0.3);
cursor:pointer;

&:active{
    transform:scale(0.985);
    box-shadow:none;
}

transition:0.4s color ease-in;
`