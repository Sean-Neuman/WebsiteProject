import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";
import {Container} from "../components/styles/container.styled";
import Header from '../components/header';
import getAllGit from "../lib/getgitdata";
import React, { useEffect } from 'react';
import {Title} from "../components/title";
import { StyledTitle } from "../components/styles/title.styled";
import GitCard from "../components/gitCard";
import { useState } from "react";
import StyledRowDiv from "../components/styles/rowdiv.styled";

const theme = {
    colors: {
        primary: "black",
        secondary: "mediumaquamarine",
        third: "cyan",
        fourth: "#ffffff",
        },
    };

export default function Home() {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllGit();
      console.log(data.data.public_repos);
      setData(data.data);
    }
    fetchData();
  }, []);

  return (
    <ThemeProvider theme= { theme }>
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <StyledTitle> Sean Neuman</ StyledTitle>
        <div>
          <div>
            <h2>About Me</h2>
            <p> Hello! I’m Sean Neuman, a curious soul navigating the intricate labyrinth of algorithms and data structures. Born in the binary heart of Silicon Valley, I’ve always been drawn to the symphony of ones and zeros. My friends say I have an uncanny ability to turn coffee into code, and I wear that badge with pride.</p>
            <h2>Education</h2>
            <p> I graduated from the University of California, Santa Cruz with a degree in Computer Science. I’ve always been fascinated by the intersection of technology and human experience, and I’m excited to see where the future takes us.</p>
            <h2>Experience</h2>
            <p> I’ve worked as a software engineer for the past 5 years, and I’ve had the opportunity to work on a wide variety of projects. I’ve worked on everything from mobile apps to web applications, and I’m always looking for new challenges to tackle.</p>
            <h2>Skills</h2>
            <p> I’m proficient in a variety of programming languages, including Python, JavaScript, and C++. I’m also familiar with a wide variety of frameworks and libraries, including React, Node.js, and Django. I’m always looking to expand my skillset, and I’m excited to see where my journey takes me.</p>
          </div>
          <GitCard data={data} />
          </div>
      </Container>

    </>
    </ThemeProvider>
  )
}