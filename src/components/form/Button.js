import React, {forwardRef} from "react";
import styled from "styled-components";
//import ButtonAnt from "antd/lib/button";

export const Button =
    forwardRef((props, ref) =>
        <ButtonCss ref={ref} {...props} />
    );

const ButtonCss = styled.button`
  background: red;
  color: white;
`;
