import React from "react";
import styled from "styled-components";

const DD = styled.select`
  width: 30%;
  height: 3rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #f6fefb;
  background: none;
  color: #f6fefb;
  border-radius: 10px;
  margin: 2rem;
`;

const Dropdown = () => {
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

  return (
    <DD>
      {data.map((item, index) => (
        <option key={index}>{item.name}</option>
      ))}
    </DD>
  );
};

export default Dropdown;
