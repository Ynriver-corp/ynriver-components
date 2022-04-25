import React from "react";
import styled from "styled-components";

const Button = React
    .forwardRef((props, ref) =>
        <ButtonAntCss ref={ref} {...props} />);

const ButtonAntCss = styled.button`
  background: red;
  color: white;
`;

export default Button;
