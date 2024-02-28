import React from "react";
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardDescription,
  CardRating,
  CardNum,
} from "./styles/gitCard.styled";

import Link from "react-router-dom";
import { Button } from "./styles/login.styled";
import styled from "styled-components";
import { StyledButton } from "./styles/button.styled";

export default function ProjCard({ data }) {
  return (
    <CardWrapper>
      <CardTitle>{data.Title}</CardTitle>
      <CardDescription> {data.Descripion} </CardDescription>
      <a href = {data.Link}> Learn More Here </a>
    </CardWrapper>
  );
}
