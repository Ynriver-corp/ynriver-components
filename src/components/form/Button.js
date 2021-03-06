import React, {forwardRef} from "react";
import styled from "styled-components";

export const Button = forwardRef(
    (props, ref) =>
        <ButtonStyled ref={ref} {...props} />
);

const ButtonStyled = styled.button`
  background: red;
  color: white;
`;
