import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../img/background.jpg";
import axios from "axios";
import Dropdown from "../components/Dropdown";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #f6fefb;
`;

const MainTitle = styled.h1`
  font-size: 35px;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 2rem;
  font-family: helvetica;
`;

const Button = styled.button`
  width: 20rem;
  height: 5rem;
  background: none;
  border: 1px solid #f6fefb;
  margin: 4rem;
  color: #f6fefb;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: helvetica;
`;

const MainPage = () => {
  const data = [
    {
      name: "Most streamed",
    },
    {
      name: "Pop",
    },
    {
      name: "Rock",
    },
    {
      name: "Hip Hop",
    },
    {
      name: "Raggea",
    },
    {
      name: "Country",
    },
  ];

  const [token, setToken] = useState("");

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic" +
          btoa(
            process.env.REACT_APP_CLIENT_ID +
              ":" +
              process.env.REACT_APP_CLIENT_SECRET
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
    });
  }, []);

  return (
    <Section style={{ backgroundImage: `url(${background})` }}>
      <MainTitle>Please select your type favourite of genere:</MainTitle>
      <form onSubmit={() => {}} onChange={() => {}}>
        <Dropdown options={data} />
        <Dropdown options={data} />
        <Button>Start Discovering</Button>
      </form>
    </Section>
  );
};

export default MainPage;
