import React, { useState } from "react";
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


const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <DD
      value={selectedValue}
      onchange={(e) => setSelectedValue(e.target.value)}
    >
      {props.options.map((item, index) => (
        <option key={index}>{item.name}</option>
      ))}
    </DD>
  );
};

export default Dropdown;
