import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";
import {Container} from "../components/styles/container.styled";
import Header from '../components/header';
import React, { useEffect } from 'react';
import getAllMovies from "../lib/getallmovies";
import Card from "../components/card";
import { StyledTitle } from "../components/styles/title.styled";


const theme = {
    colors: {
        primary: "black",
        secondary: "mediumaquamarine",
        third: "#mediumseagreen",
        fourth: "#ffffff",
        },
    };

export default function Movies() {

  const [movies, setMovies] = React.useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const movies = await getAllMovies();
      setMovies(movies.results);
    }
    fetchMovies();
  }, []);

  return (
    <ThemeProvider theme= { theme }>
    <>
        <GlobalStyles />
        <Header />
        <Container>
            <StyledTitle>Movies Ratings List.</StyledTitle>
            <ul>
                {movies.map((moviedata) => (
                      <Card movie={moviedata} key ={moviedata.id} />
                ))}
            </ul>
        </Container>

    </>
    </ThemeProvider>
  )
}