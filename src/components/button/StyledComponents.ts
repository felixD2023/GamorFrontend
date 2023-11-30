//styled-components
import { styled } from "styled-components";

export const ButtonTypeText = styled.div`
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: small;
  margin: 0px 25px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.selected};
  }
  user-select: none;
`;

export const ButtonTypeRounded = styled.div`
	color: ${({ theme }) => theme.text};
  font-size: small;
	display: inline-block;
  padding: 14px 20px;
  background: black;
  color: white;
  border-radius: 30px;
  border:none;
	&:hover{
		cursor:pointer;
	}
	&:active{
		color:black;
		background-color:white
	}
	user-select: none;
	box-shadow: 5px 15px 53px 0px rgba(0,0,0,0.3);
`
