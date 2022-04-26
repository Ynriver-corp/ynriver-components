import React, {forwardRef} from "react";
//import styled from "styled-components";
import ButtonAnt from "antd/lib/button";

//export const Button = () => <button>hola</button>

export const Button =
    forwardRef((props, ref) =>
        <ButtonAnt ref={ref} {...props} />);
/*
const ButtonCss = styled(ButtonAnt)`
  background: red;
  color: white;
`;
*/
