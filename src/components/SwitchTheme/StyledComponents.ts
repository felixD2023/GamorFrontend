//styled-components
import { styled } from "styled-components";

export const SwitchContainer = styled.div`
  width:40px;
  height: 20px;
  background-color: ${({ theme }) => theme.selected};
  display:flex-box;
  border-radius: 2em;
	position:relative;
  &:hover{
    cursor:pointer;
  }
  
`;

export const SwitchBall = styled.div<{position:boolean}>`
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.background1};
	border-radius: 50%;
	position:absolute;
	top:2.5px;
	left:${({position})=>!position?"2.5px":"22.5px"};
  transition:0.4s all ease-in;
`;
