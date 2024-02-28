import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";
import {Container} from "../components/styles/container.styled";
import Header from '../components/header';
import React, { useEffect } from 'react';
import getAllMovies from "../lib/getallmovies";
import Card from "../components/card";


const theme = {
    colors: {
        primary: "black",
        secondary: "mediumaquamarine",
        third: "#mediumseagreen",
        fourth: "#ffffff",
        },
    };

export default function SecretAndSecure() {


  return (
    <ThemeProvider theme= { theme }>
    <>
      <GlobalStyles />
      <Header />
      <Container>
   
      </Container>

    </>
    </ThemeProvider>
  )
}