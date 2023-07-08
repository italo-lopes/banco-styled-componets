import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;
// aqui é styled components
export default ({ type, value, date, from }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span>{value}</span>
      <span>{date}</span>
      <span>{from}</span>
    </Item>
  );
};
