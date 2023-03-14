import React from "react";
import styled from 'styled-components'
import "./Button.css";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return <ButtonCompoment {...props}>{props.label}</ButtonCompoment>;
};

const ButtonCompoment = styled.button`
  font-size: 30px;
  background-color: #34f93b; 
  border-radius: 40px;
  border-width: 0px;
  padding: 10px;
`;

export default Button;