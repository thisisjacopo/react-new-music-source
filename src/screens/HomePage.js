import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <Section>
      <h1>Hola</h1>
      <p>Welcome to your new favorite music</p>
      <Link to={"/main"}>
        <button type="">ENTER HERE</button>
      </Link>
    </Section>
  );
};

export default HomePage;
