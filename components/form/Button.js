import React, {forwardRef} from "react";
import styled from "styled-components";

const Button = forwardRef((props, ref) => <ButtonAntCss ref={ref} {...props} />);

const ButtonAntCss = styled.button`
  background: red;
  color: white;
`;

export default Button;
