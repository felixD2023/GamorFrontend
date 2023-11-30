import React from "react"

import { ButtonTypeRounded, ButtonTypeText } from "./StyledComponents";

interface propsButton {
  variant: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Button = (props: propsButton) => {
  return (
    <div onClick={props.onClick}>
      {props.variant === "text" ? (
        <ButtonTypeText>{props.text}</ButtonTypeText>
      ) : props.variant === "rounded" ? (
        <ButtonTypeRounded>{props.text}</ButtonTypeRounded>
      ) : props.variant === "standard" ? (
        <div>standard</div>
      ) : null}
    </div>
  );
};

export default Button;
