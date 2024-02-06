import React, { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  const [click, setClick] = useState(false);

  //Handles the scroll to each section
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <>
      <Title>
        <p>Discover a new era of cool </p>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">NFTs.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-2">Collectibles.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">Ape Killers!</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Subtitle>Bored of Apes? Try Something New</Subtitle>
      <ButtonContainer>
        <Btn onClick={() => scrollTo("about")}>Explore</Btn>
      </ButtonContainer>
    </>
  );
};

const Title = styled.h2`
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: 500;
  width: 90%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala";
  }

  .text {
    &-1 {
      color: lightseagreen;
    }
    &-2 {
      color: goldenrod;
    }
    &-3 {
      color: orangered;
    }
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.Rgba}, 0.6)`};
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
  font-weight: 500;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -40%) scale(1);
    padding: 0.3rem;
  }
`;
export default TypeWriterText;
