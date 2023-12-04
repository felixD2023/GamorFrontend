import { useState } from "react";
import { SwitchContainer, SwitchBall } from "./StyledComponents";

//redux
import { useDispatch } from "react-redux";
import {changeTheme} from "../../Redux/themeSlice"

//primeicons
import "primeicons/primeicons.css";

const ButtonTheme = () => {
  const [position, setPosition] = useState(false);
  const dispatch=useDispatch();

  const handleChangeTheme=()=>{
    dispatch(changeTheme())
    setPosition(!position)
  }

  return (
    <SwitchContainer onClick={() => handleChangeTheme()}>
      <SwitchBall position_x={position}>
        {!position ? (
          <div
            className="pi pi-moon"
            style={{ width: "16px", height: "16px" }}
          ></div>
        ) : (
          <div
            className="pi pi-sun"
            style={{ width: "15px", height: "15px", color:"white" }}
          ></div>
        )}
      </SwitchBall>
    </SwitchContainer>
  );
};

export default ButtonTheme;
