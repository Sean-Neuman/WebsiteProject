import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";
import {Container} from "../components/styles/container.styled";
import Header from '../components/header';

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
            <h1>Hello, Portfolio!</h1>
        </Container>

    </>
    </ThemeProvider>
  )
}

