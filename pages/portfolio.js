import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";
import {Container} from "../components/styles/container.styled";
import Header from '../components/header';
import { useState } from "react";
import Login from "../components/login";


const theme = {
    colors: {
        primary: "black",
        secondary: "mediumaquamarine",
        third: "#mediumseagreen",
        fourth: "#ffffff",
        },
    };


export default function Portfolio() {


return (
    <ThemeProvider theme= { theme }>
    <>
        <GlobalStyles />

        <Header />
        <Container>
            <Login />
        </Container>

    </>
    </ThemeProvider>
  )
}

