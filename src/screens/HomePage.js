import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../img/background.jpg";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #f6fefb;
`;

const Button = styled.button`
  width: 20rem;
  height: 5rem;
  background: none;
  border: 1px solid #f6fefb;
  margin: 5rem;
  color: #f6fefb;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: helvetica;
`;

const P = styled.p`
  font-size: 25px;
  font-family: helvetica;
`;

const MainTitle = styled.h1`
  font-size: 65px;
  letter-spacing: 2px;
  font-weight: bold;
  margin: 2rem;
  font-family: helvetica;
`;

const HomePage = () => {
  return (
    <Section style={{ backgroundImage: `url(${background})` }}>
      <MainTitle>Welcome</MainTitle>
      <P>Click below to access you next favourite music</P>
      <Link to={"/main"}>
        <Button>ENTER HERE</Button>
      </Link>
    </Section>
  );
};

export default HomePage;
