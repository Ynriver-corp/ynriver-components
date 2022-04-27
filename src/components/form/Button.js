import React, {forwardRef} from "react";
import {ButtonStyled} from "./ButtonStyled";

export const Button = forwardRef((props, ref) =>
    <ButtonStyled ref={ref} {...props} >hola</ButtonStyled>
);
