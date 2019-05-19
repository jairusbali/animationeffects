import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;

  margin: auto;

  span {
    width: 100%;
    height: 1rem;
    background: black;
    margin: 1rem auto;
    border-radius: 1rem;

    /* transition: all 0.2s ease-out; */
    transition: all 0.8s ease-out;

  }
  span:first-child
      ${props =>
        props.clicked &&
        css`
        {
          background: red;
          transform: translateY(48px) rotate(220deg);
          
        }
        `};

        span:last-child
      ${props =>
        props.clicked &&
        css`
        {
          background: red;
          transform: translateY(-48px) rotate(-220deg);
        }
        `};

        span:nth-child(2)
      ${props =>
        props.clicked &&
        css`
        {
          opacity: 0;
          transition: opacity 400ms ease;
        }
        `};

`;

// click button
// top and bottom bar animate to the middle
// middle span disappears
// rotate top and bottom bar individually to create an X

const menu = () => {
  const [clicked, setState] = useState(false);
  return (
    <Container
      onClick={() => {
        console.log("clicked");
        setState(!clicked);
      }}
      clicked={clicked}
    >
      <span />
      <span />
      <span />
    </Container>
  );
};

export default menu;
