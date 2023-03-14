import React from "react";
import styled from 'styled-components'
import "./Button.css";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return <ButtonCompoment {...props}>{props.label}</ButtonCompoment>;
};

const ButtonCompoment = styled.button`
  font-size: 30px;
  background-color: 'rgb(30, 165, 76)';
`;

export default Button;