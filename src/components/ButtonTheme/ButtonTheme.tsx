import React, {useState} from "react"
import { SwitchContainer,SwitchBall } from "./StyledComponents";

const ButtonTheme = () => {
  const [position,setPosition]=useState(false)
	
	return (
    <SwitchContainer onClick={()=>setPosition(!position)}>
      <SwitchBall position={position}></SwitchBall>
    </SwitchContainer>
  );
};

export default ButtonTheme;
